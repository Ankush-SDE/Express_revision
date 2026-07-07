// // const express = require("express");
// // const app = express();

// // const student = `{
// //   name: "Ankush",
// //   age: 21,
// //   city: "Patna",
// //   course: "Full Stack Development",
// //   skills: [
// //     "HTML",
// //     "CSS",
// //     "JavaScript",
// //     "Node.js",
// //     "Express.js"
// //   ]
// // };

// // app.get("/", (req, res) => {
// //   res.json(student);
// // })`;
// // app.get("/search", (req, res) => {
// //     res.send("hello");
// // });
// // app.get('/ap',(req,res)=>{
// //   res.send("hello Ankush")
// // })
// // app.get("/api1", (req, res) => {
// //   res.send(student);   
// // });
// // app.post("/api", (req, res) => {
// //   student = req.body;
// //   res.send({
// //     message: "Student updated successfully",
// //     data: student
// //   });
// // });

// // app.listen(3000, () => {
// //   console.log("localhost//3000/api");
// // })
// const express = require("express");
// const app = express();

// app.use(express.json());

// let students = [];

// app.post("/api", (req, res) => {
//     const data = req.body;
//     students.push(data);

//     res.status(201).json({
//         message: "Student added successfully",
//         data: data
//     });
// });
// app.put("/search", (req, res) => {
//   student = {
//     ...student,
//     ...req.body
//   };

//   res.json({
//     message: "hello",
//     student
//   });
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
const express = require("express");
const app = express();
const mongoDB = require("mongoose")


mongoDB.connect("")

app.use(express.json());

app.put("/search", (req, res) => {
    res.json({
        message: "Data updated successfully",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});