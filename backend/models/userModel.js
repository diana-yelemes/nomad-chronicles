import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // User's full name
    email: { type: String, required: true, unique: true }, // User's email for login
    password: { type: String, required: true }, // Hashed password for secure login
    favoriteFigures: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Figure'
    }],
    role: { type: String, enum: ["user", "admin"], default: "user" }, // User role for permissions
    createdAt: { type: Date, default: Date.now }, // Account creation timestamp
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
