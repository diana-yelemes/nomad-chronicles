import { v2 as cloudinary } from "cloudinary"
import figureModel from "../models/figureModel.js";


const createFigure = async (req, res) => {
    try {
        const { name, description, category, birthYear, deathYear, notableWorks, popular, imageUrl } = req.body;

        console.log("Request Body:", req.body); // Debugging log

        if (!name || !description || !category || !birthYear || !imageUrl) {
            return res.status(400).json({ success: false, message: "Required fields are missing, including imageUrl" });
        }

        const figureData = {
            name,
            description,
            category,
            birthYear: Number(birthYear),
            deathYear: deathYear ? Number(deathYear) : null,
            notableWorks: notableWorks ? notableWorks.split(",").map(work => work.trim()) : [],
            popular: popular === "true" || popular === true,
            image: imageUrl, // Use only the provided imageUrl
            createdAt: Date.now(),
        };

        console.log("Figure Data to Save:", figureData);

        const figure = new figureModel(figureData);
        await figure.save();

        res.json({ success: true, message: "Figure Created", figure });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};



// Controller function to remove an existing figure
const deleteFigure = async (req, res) => {
    try {
        await figureModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Figure Deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller function to list all figures
const getAllFigures = async (req, res) => {
    try {
        const figures = await figureModel.find({});
        res.json({ success: true, figures });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller function to fetch a single figure's details
const getFigureById = async (req, res) => {
    try {
        const { figureId } = req.body;
        const figure = await figureModel.findById(figureId);
        if (!figure) {
            return res.status(404).json({ success: false, message: "Figure not found" });
        }
        res.json({ success: true, figure });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};
const updateFigure = async (req, res) => {
    try {
        const { id } = req.body; // The ID of the figure to update
        const updates = req.body; // The fields to update

        if (!id) {
            return res.status(400).json({ success: false, message: "Figure ID is required" });
        }

        // Find and update the figure
        const updatedFigure = await figureModel.findByIdAndUpdate(
            id, // The ID to find
            updates, // The fields to update
            { new: true, runValidators: true } // Return the updated document and run validation
        );

        if (!updatedFigure) {
            return res.status(404).json({ success: false, message: "Figure not found" });
        }

        res.json({ success: true, message: "Figure updated successfully", figure: updatedFigure });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { createFigure, deleteFigure, getAllFigures, getFigureById, updateFigure };
