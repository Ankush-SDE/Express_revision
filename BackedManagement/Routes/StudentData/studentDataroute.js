const express = require("express");
const router = express.Router();

const { createStudent } = require("../../Controller/StudentData/studentData");

//router.post("/studentData", createStudent);
router.post("/studentData", createStudent);
module.exports = router;