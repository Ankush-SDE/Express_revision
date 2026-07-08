const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    empName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

// Model
const StudentModel = mongoose.model("employeeDataBase", studentSchema);

// POST API
app.post("/post/studentData", async (req, res) => {
    try {
        const student = new StudentModel(req.body);

        const data = await student.save();

        res.status(201).json({
            data,
            message: "Data has been saved successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error while saving data"
        });
    }
});

// GET API
app.get("/get/studentData", async (req, res) => {
    try {
        const data = await StudentModel.find();

        res.status(200).json({
            data,
            message: "Data fetched successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Error while fetching data"
        });
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});