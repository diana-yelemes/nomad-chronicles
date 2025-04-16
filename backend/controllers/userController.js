import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Figure from "../models/figureModel.js";


// Function for Creating a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Controller function to handle user login
const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Controller function to handle user register
const handleUserRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email address" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        // Get user with favorite figure IDs
        const user = await userModel.findById(req.user.id)
            .select('name email favoriteFigures');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get figure details in one query
        const figures = await Figure.find(  // Используем Figure, а не figureModel
            { _id: { $in: user.favoriteFigures } },
            'name _id'
        );

        // Create a map for quick lookup
        const figureMap = figures.reduce((map, figure) => {
            map[figure._id.toString()] = figure;
            return map;
        }, {});

        // Combine the data with proper figure details
        const responseData = {
            _id: user._id,
            name: user.name,
            email: user.email,
            favoriteFigures: user.favoriteFigures.map(id => {
                const figure = figureMap[id.toString()];
                return figure || { _id: id, name: `Figure ${id}` };
            })
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error in getUserProfile:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};
export const getFiguresBatch = async (req, res) => {
    try {
        const { ids } = req.body;
        
        if (!ids || !Array.isArray(ids)) {
            return res.status(400).json({ message: 'Invalid figure IDs provided' });
        }

        const figures = await figureModel.find(
            { _id: { $in: ids } },
            'name _id' // Only return name and ID
        );

        res.json(figures);
    } catch (error) {
        console.error('Error in getFiguresBatch:', error);
        res.status(500).json({ 
            message: 'Error fetching figure details',
            error: error.message
        });
    }
};

// Controller function to handle admin login
const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Controller function to add/remove favorite figures
const updateFavoriteFigures = async (req, res) => {
    try {
        const { figureId } = req.body;
        const userId = req.user.id;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.favoriteFigures) {
            user.favoriteFigures = [];
        }

        const figureIndex = user.favoriteFigures.indexOf(figureId);
        if (figureIndex === -1) {
            user.favoriteFigures.push(figureId);
        } else {
            user.favoriteFigures.splice(figureIndex, 1);
        }

        await user.save();

        res.json({
            success: true,
            isFavorite: figureIndex === -1,
            favoriteFigures: user.favoriteFigures
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller function to get favorite figures
const getFavoriteFigures = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select('favoriteFigures');

        res.json({
            success: true,
            favoriteFigures: user.favoriteFigures || []
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Export all at the end
export {
    handleUserLogin,
    handleUserRegister,
    handleAdminLogin,
    updateFavoriteFigures,
    getFavoriteFigures,

};
