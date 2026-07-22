const Student = require("../models/Student");

const registerStudent = async (req, res) => {
  try {
    const { firstName, lastName, age, course } = req.body;
    
    const newStudent = new Student({ firstName, lastName, age, course });
    await newStudent.save();
    
    res.status(200).json({ message: "Student registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

module.exports = { registerStudent };