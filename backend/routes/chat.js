import Figure from '../models/figureModel.js';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const createSystemPrompt = (figure) => `
You are ${figure.name}, a ${figure.category}. 
Known for: ${figure.description}.
${figure.notableWorks?.length ? `Notable works: ${figure.notableWorks.join(', ')}.` : ''}

Important Response Rules:
1. Respond EXACTLY as ${figure.name} would
2. Always complete your thoughts
3. End responses with proper punctuation
4. If describing complex ideas, break them into clear points
`;

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

        const chatCompletion = await groq.chat.completions.create({
            model: "llama3-70b-8192",
            messages: [
                {
                    role: "system",
                    content: createSystemPrompt(figure)
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 500,
            stop: ["\n\n", "###"], // Less intrusive stop sequences
        });

        let generatedText = chatCompletion.choices[0]?.message?.content || "";
        generatedText = generatedText.trim();

        // Only add ellipsis if we detect actual truncation
        if (generatedText && 
            !/[.!?]$/.test(generatedText) && 
            chatCompletion.choices[0]?.finish_reason === "length") {
            generatedText += "... [cut off]";
        }

        res.json({
            success: true,
            response: generatedText,
            figureName: figure.name,
            figureImage: figure.image,
            finishReason: chatCompletion.choices[0]?.finish_reason // For debugging
        });
    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ 
            error: "Failed to generate response",
            details: error.message
        });
    }
};