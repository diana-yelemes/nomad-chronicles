import { HfInference } from '@huggingface/inference';
import Figure from '../models/figureModel.js';

console.log('HF_TOKEN:', process.env.HF_TOKEN);
const hf = new HfInference(process.env.HF_TOKEN);


export const chatWithFigure = async (req, res) => {
    try {
        const { figure_id, message } = req.body;
        
        if (!figure_id || !message) {
            return res.status(400).json({ error: "Missing figure_id or message" });
        }

        const figure = await Figure.findById(figure_id);
        if (!figure) {
            return res.status(404).json({ error: "Figure not found" });
        }

        const prompt = `You are ${figure.name}, a ${figure.category} known for: ${figure.description}.
Notable works: ${figure.notableWorks?.join(', ') || 'none'}.

The user says: ${message}

How would ${figure.name} respond? Answer in first person as if you are ${figure.name}:`;

        const response = await hf.textGeneration({
            model: "mistralai/Mistral-7B-Instruct-v0.1",
            inputs: prompt,
            parameters: {
                max_new_tokens: 200,
                temperature: 0.7,
                return_full_text: false
            }
        }, {
            headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` }
        });

        res.json({
            success: true,
            response: response.generated_text.trim(),
            figureName: figure.name,
            figureImage: figure.image
        });
    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ 
            error: "Failed to generate response",
            details: error.toString()
        });
    }
};