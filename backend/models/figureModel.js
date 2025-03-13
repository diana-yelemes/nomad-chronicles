import mongoose from "mongoose";

const figureSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the historical figure
    description: { type: String, required: true }, // A short bio or description
    category: { type: String, required: true }, // Category (e.g., "Politician", "Scientist")
    image: { type: String, required: true }, // URL of the figure's image
    birthYear: { type: Number, required: true }, // Birth year of the figure
    deathYear: { type: Number }, // Death year (optional, for still-living figures)
    notableWorks: { type: [String] }, // Array of notable works or contributions
    popular: { type: Boolean, default: false }, // Flag for marking popular figures
    createdAt: { type: Date, default: Date.now }, // Timestamp for creation
});

const figureModel = mongoose.models.figure || mongoose.model("figure", figureSchema);

export default figureModel;
