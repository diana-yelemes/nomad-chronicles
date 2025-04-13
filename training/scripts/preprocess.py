import PyPDF2
import os
import json
from transformers import AutoTokenizer

# Configuration
MODEL_NAME = "microsoft/DialoGPT-medium"
MAX_LENGTH = 512
OUTPUT_DIR = "../data/processed/"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

def process_biographies():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    
    for filename in os.listdir("../data/biographies/"):
        if filename.endswith(".pdf"):
            figure_name = os.path.splitext(filename)[0]
            pdf_path = os.path.join("../data/biographies/", filename)
            
            # Extract text
            text = extract_text_from_pdf(pdf_path)
            
            # Create training examples (simplified - you'll need to customize this)
            examples = [
                {"prompt": f"Tell me about yourself", "response": f"I am {figure_name}. {text[:500]}"},
                {"prompt": "What are you known for?", "response": f"I am known for {text[500:1000]}"}
            ]
            
            # Save to JSON
            output_path = os.path.join(OUTPUT_DIR, f"{figure_name}.json")
            with open(output_path, 'w') as f:
                json.dump(examples, f)

if __name__ == "__main__":
    process_biographies()