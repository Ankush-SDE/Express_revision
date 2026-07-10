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

// ===========================
// CREATE USER
// ===========================
app.post("/register", async (req, res) => {
    try {

        const user = new User(req.body);
        const data = await user.save();

        res.status(201).json({
            message: "User Registered Successfully",
            data: data
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// ===========================
// GET ALL USERS
// ===========================
app.get("/users", async (req, res) => {
    try {

        const users = await User.find();

        res.status(200).json({
            message: "Users Fetched Successfully",
            totalUsers: users.length,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// ===========================
// GET USER BY ID
// ===========================
app.get("/users/:id", async (req, res) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Found",
            data: user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// ===========================
// UPDATE USER
// ===========================
app.put("/users/:id", async (req, res) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Updated Successfully",
            data: updatedUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// ===========================
// DELETE USER
// ===========================
app.delete("/users/:id", async (req, res) => {
    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Deleted Successfully",
            data: deletedUser
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});
app.delete("/users/:id", async (req, res) => {
    console.log(req.params.id);

    const deletedUser = await User.findByIdAndDelete(req.params.id);

    console.log(deletedUser);

    if (!deletedUser) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    res.json({
        message: "User Deleted Successfully",
        data: deletedUser
    });
});

// Home Route
app.get("/", (req, res) => {
    res.send("User API Running...");
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});