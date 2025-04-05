from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Connect to MongoDB
client = MongoClient(os.getenv("MONGODB_URI"))
db = client[os.getenv("DB_NAME")]
figures_collection = db["figures"]

# Load the model (this will happen on startup)
model_name = "HuggingFaceH4/zephyr-7b-beta"
tokenizer = AutoTokenizer.from_pretrained("HuggingFaceH4/zephyr-7b-beta")
model = AutoModelForCausalLM.from_pretrained("HuggingFaceH4/zephyr-7b-beta")
chat_pipeline = pipeline("text-generation", model=model, tokenizer=tokenizer)


@app.post("/api/chat")
async def chat_with_figure(request: dict):
    figure_id = request.get("figure_id")
    message = request.get("message")
    
    if not figure_id or not message:
        raise HTTPException(status_code=400, detail="Missing figure_id or message")
    
    # Get figure data from MongoDB
    figure = figures_collection.find_one({"_id": figure_id})
    if not figure:
        raise HTTPException(status_code=404, detail="Figure not found")
    
    # Create prompt with figure's personality
    prompt = f"""You are {figure['name']}, a {figure['category']} known for: {figure['description']}.
    Notable works: {', '.join(figure.get('notableWorks', []))}.
    
    The user says: {message}
    
    How would {figure['name']} respond? Answer in first person as if you are {figure['name']}:
    """
    
    # Generate response
    try:
        response = chat_pipeline(
            prompt,
            max_length=200,
            do_sample=True,
            temperature=0.7,
            top_k=50,
            top_p=0.95,
        )
        
        return {
            "success": True,
            "response": response[0]["generated_text"].replace(prompt, "").strip()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))