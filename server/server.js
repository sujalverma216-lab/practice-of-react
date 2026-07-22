const app = require("./app");
const mongoose = require("mongoose");

const PORT = 3000;
// Added "tradingApp" right before the "?"
const MONGO_URI = "mongodb+srv://sujalverma216_db_user:5JeFLnly3XdrQwoj@databasefortlp.ylxasqs.mongodb.net/tradingApp?appName=DatabaseforTLP"; 

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });