const express = require("express");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is Working!");
});

// Course Route
app.use("/Courses", courseRoutes);

module.exports = app;