const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const createAuthResponse = (user) => ({
  token: jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" }),
  user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
});

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const normalizedEmail = email?.trim().toLowerCase();
    if (!firstName?.trim() || !lastName?.trim() || !normalizedEmail || !password || password.length < 8) {
      return res.status(400).json({ message: "Enter your name, a valid email, and a password of at least 8 characters." });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create and save new user
    const newUser = new User({ firstName: firstName.trim(), lastName: lastName.trim(), email: normalizedEmail, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Account created successfully", ...createAuthResponse(newUser) });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email?.trim().toLowerCase();
    
    // Find user
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json(createAuthResponse(user));
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

const me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("firstName lastName email");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email } });
  } catch {
    res.status(500).json({ message: "Could not load profile" });
  }
};

module.exports = { signup, login, me };
