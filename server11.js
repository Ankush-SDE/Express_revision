// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());


async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
}

connectDB();
// ✅ Schema & Model
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String
});
const Student = mongoose.model("Student", studentSchema);

// ----------------------
// 1. CREATE (POST)
// ----------------------
app.post("/api/students", async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({
        message: "Student Created Successfully",
        data: newStudent
    });
});

// ----------------------
// 2. READ (GET)
// ----------------------
app.get("/api/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/api/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// ----------------------
// 3. UPDATE (PUT/PATCH)
// ----------------------







app.put("/api/students/:id", async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json({
        message: "Student Updated Successfully",
        data: updatedStudent
    });
});







app.patch("/api/students/:id", async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json({
        message: "Student Partially Updated",
        data: updatedStudent
    });
});

// ----------------------
// 4. DELETE
// ----------------------
app.delete("/api/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted Successfully" });
});

// ✅ Server Start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
