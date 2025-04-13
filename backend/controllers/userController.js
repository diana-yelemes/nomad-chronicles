import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function to create a token
const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET);
};

// Controller function to handle user login
const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id, user.role);
            res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role, favoriteFigures: user.favoriteFigures } });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Controller function to handle user registration
const handleUserRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email address" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id, user.role);

        res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role, favoriteFigures: user.favoriteFigures } });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Controller function to handle admin login
const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

// Controller function to add/remove favorite figures
const updateFavoriteFigures = async (req, res) => {
    try {
        const { figureId, action } = req.body;
        const userId = req.user._id; // Get from auth middleware

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }

        if (action === "add") {
            if (!user.favoriteFigures.includes(figureId)) {
                user.favoriteFigures.push(figureId);
                await user.save();
            }
        } else if (action === "remove") {
            user.favoriteFigures = user.favoriteFigures.filter(id => id !== figureId);
            await user.save();
        } else {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid action" 
            });
        }

        res.json({ 
            success: true, 
            favoriteFigures: user.favoriteFigures 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Controller function to fetch favorite figures
const getFavoriteFigures = async (req, res) => {
    try {
        // User is already attached to request by auth middleware
        const user = req.user;
        
        res.json({ 
            success: true, 
            favoriteFigures: user.favoriteFigures 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};



export { handleUserLogin, handleUserRegister, handleAdminLogin, updateFavoriteFigures, getFavoriteFigures };
