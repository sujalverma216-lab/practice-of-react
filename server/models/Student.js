const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);