from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import requests

app = Flask(__name__)

# MongoDB Configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/history_chatbot"
mongo = PyMongo(app)

# Hugging Face API Configuration
HF_API_URL = "https://api-inference.huggingface.co/models/deevnnv/nomadchroniclesapi"
HF_API_KEY = "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"

def get_ai_response(figure_name, user_input, bio):
    """
    Sends user input to Hugging Face's Falcon model and returns the response.
    """
    prompt = f"""
    You are {figure_name}, a historical figure.
    Biography: {bio}
    User: {user_input}
    You:"""
    
    headers = {"Authorization": f"Bearer {HF_API_KEY}"}
    payload = {"inputs": prompt}
    response = requests.post(HF_API_URL, headers=headers, json=payload)
    
    if response.status_code == 200:
        return response.json()[0]['generated_text'].replace(prompt, '').strip()
    else:
        return "I'm sorry, I couldn't process your request right now."

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    figure_id = data.get("figure_id")
    user_input = data.get("message")

    figure = mongo.db.figures.find_one({"_id": figure_id})
    bio = mongo.db.biographies.find_one({"figure_id": figure_id})
    
    if not figure or not bio:
        return jsonify({"error": "Figure not found"}), 404
    
    response = get_ai_response(figure['name'], user_input, bio['text'])
    
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
