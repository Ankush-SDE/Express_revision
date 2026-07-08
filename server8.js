const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Model
const User = mongoose.model("User", userSchema);

// POST Method (Save User)
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const data = await user.save();

        res.status(201).json({
            message: "User Registered Successfully",
            data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// GET Method (Fetch All Users)
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "Users Fetched Successfully",
            users
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});