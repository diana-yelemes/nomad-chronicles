from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# MongoDB setup
MONGO_URI = "mongodb://zico:user1@cluster0-shard-00-00.vnc1w.mongodb.net:27017,cluster0-shard-00-01.vnc1w.mongodb.net:27017,cluster0-shard-00-02.vnc1w.mongodb.net:27017/ProjectResearch?ssl=true&replicaSet=atlas-12o8ne-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client.get_database("ProjectResearch")  # Correct DB name
figures_collection = db["figures"]



# Hugging Face API Config
HF_API_URL = "https://api-inference.huggingface.co/models/deevnnv/nomadchroniclesapi"
HF_API_KEY = "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"
HEADERS = {"Authorization": f"Bearer {HF_API_KEY}"}

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    print("📩 Received Data:", data)  # Debugging

    figure_id = data.get("figure_id")
    user_message = data.get("message")

    if not figure_id or not user_message:
        return jsonify({"success": False, "message": "Invalid request"}), 400

    try:
        object_id = ObjectId(figure_id)  # Convert string ID to ObjectId
        print("✅ Converted figure_id to ObjectId:", object_id)
    except Exception as e:
        print("❌ Invalid ObjectId format:", e)
        return jsonify({"success": False, "message": "Invalid figure ID format"}), 400
    
    print("🛠 Testing MongoDB connection...")
    print("Databases:", client.list_database_names())
    print("Collections in ProjectResearch:", db.list_collection_names())

    # 🔍 Check if the figure exists in MongoDB
    figure = figures_collection.find_one({"_id": object_id})
    if not figure:
        print("❌ Figure not found in MongoDB")
        return jsonify({"success": False, "message": "Figure not found"}), 404

    print("✅ Figure found:", figure)

    # Prepare prompt for AI
    prompt = f"You are {figure['name']}, a historical figure.\n"
    prompt += f"Description: {figure['description']}\n"
    prompt += f"Birth Year: {figure['birthYear']}\n"
    if figure.get("deathYear"):
        prompt += f"Death Year: {figure['deathYear']}\n"
    prompt += f"User: {user_message}\nAI: "

    response = requests.post(HF_API_URL, headers=HEADERS, json={"inputs": prompt})

    if response.status_code == 200:
        ai_response = response.json()[0]['generated_text']
        print("🤖 AI Response:", ai_response)  # Debugging
        return jsonify({"success": True, "response": ai_response})
    else:
        print("❌ AI Request Failed:", response.status_code, response.text)
        return jsonify({"success": False, "message": "AI request failed"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=4000)
