const StudentModel = require("../../Schema/StudentData/studentData");

const createStudent = async (req, res) => {
  try {
    const studentData = new StudentModel(req.body);

    const data = await studentData.save();

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createStudent };