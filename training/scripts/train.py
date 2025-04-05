from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments
from datasets import Dataset
import os
import json
import torch

# Configuration
MODEL_NAME = "microsoft/DialoGPT-medium"
TRAIN_DATA_PATH = "../data/processed/"
OUTPUT_MODEL_PATH = "fine_tuned_model"

def load_training_data(data_path):
    examples = []
    for filename in os.listdir(data_path):
        if filename.endswith(".json"):
            file_path = os.path.join(data_path, filename)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    examples.extend(data)
            except UnicodeDecodeError:
                print(f"Skipping {filename} - not valid UTF-8 JSON")
            except json.JSONDecodeError:
                print(f"Skipping {filename} - invalid JSON format")
    return examples

def train_model():
    # 1. Load tokenizer and model
    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
    tokenizer.pad_token = tokenizer.eos_token
    model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

    # 2. Load and prepare training data
    training_examples = load_training_data(TRAIN_DATA_PATH)
    
    if not training_examples:
        raise ValueError("No valid training data found!")

    # 3. Format data for training
    prompts = [f"[As {ex.get('figure', 'Unknown')}] {ex['prompt']}" for ex in training_examples]
    responses = [ex['response'] for ex in training_examples]

    # 4. Tokenize data
    tokenized_inputs = tokenizer(
        prompts,
        responses,
        truncation=True,
        padding='max_length',
        max_length=128,
        return_tensors="pt"
    )

    # 5. Create Hugging Face Dataset
    dataset = Dataset.from_dict({
        'input_ids': tokenized_inputs['input_ids'],
        'attention_mask': tokenized_inputs['attention_mask']
    })

    # 6. Set up training
    training_args = TrainingArguments(
        output_dir=OUTPUT_MODEL_PATH,
        overwrite_output_dir=True,
        num_train_epochs=3,
        per_device_train_batch_size=4,
        save_steps=10_000,
        save_total_limit=2,
        logging_dir='./logs',
    )

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
    )

    # 7. Train and save
    trainer.train()
    trainer.save_model(OUTPUT_MODEL_PATH)
    tokenizer.save_pretrained(OUTPUT_MODEL_PATH)
    print(f"Model saved to {OUTPUT_MODEL_PATH}")

if __name__ == "__main__":
    train_model()