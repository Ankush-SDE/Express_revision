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

// =======================
// POST - Register User
// =======================
app.post("/register", async (req, res) => {
    try {

        const user = new User(req.body);
        const data = await user.save();

        res.status(201).json({
            message: "User Registered Successfully",
            data: data
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});

// =======================
// GET - All Users
// =======================
app.get("/users", async (req, res) => {

    try {

        // Query Parameter
        const id = req.query.id;

        if (id) {

            const user = await User.find({ _id: id });

            return res.status(200).json({
                message: "Data Fetched",
                data: user
            });

        }

        const users = await User.find();

        res.status(200).json({
            message: "All Users Fetched",
            totalUsers: users.length,
            data: users
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// =======================
// GET User By Route Param
// =======================
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

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// =======================
// UPDATE User
// =======================
app.put("/users/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "User Updated Successfully",
            data: user
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// =======================
// DELETE User
// =======================
app.delete("/users/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "User Deleted Successfully",
            data: user
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// Server
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});