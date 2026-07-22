const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  stock: { type: String, required: true },
  date: { type: String, required: true },
  buyPrice: { type: Number, required: true },
  sellPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  profit: { type: Number, required: true },
});

module.exports = mongoose.model("Trade", TradeSchema);