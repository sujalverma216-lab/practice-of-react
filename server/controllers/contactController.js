const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    res.status(200).json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = {
  submitContact
};
