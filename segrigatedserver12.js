const express = require("express");
const app = express();

const connectDB = require("./BackedManagement/DBconfig/dbconfig");
//const studentRoutes = require("./BackedManagement/Routes/studentDataroute");
const studentRoutes = require("./BackedManagement/Routes/StudentData/studentDataroute");
app.use(express.json());

connectDB();

app.use("/api", studentRoutes);
//router.post("/students", createStudent);
app.listen(3000, () => {
    console.log("my server is running at port 3000");
});