from huggingface_hub import HfApi, ModelCard
import os

api = HfApi()

def deploy_model():
    # Upload your fine-tuned model to Hugging Face Hub
    api.upload_folder(
        folder_path="./fine_tuned_model",
        repo_id="deevnnv/nomadchroniclesapi",
        repo_type="model"
    )
    
    print("Model deployed successfully!")

if __name__ == "__main__":
    deploy_model()