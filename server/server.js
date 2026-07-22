const app = require("./app");
const mongoose = require("mongoose");

// Render assigns a dynamic port, so we must use process.env.PORT
const PORT = process.env.PORT || 3000;

// Your MongoDB Atlas URI
const MONGO_URI = "mongodb+srv://sujalverma216_db_user:5JeFLnly3XdrQwoj@databasefortlp.ylxasqs.mongodb.net/tradingApp?appName=DatabaseforTLP"; 

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });