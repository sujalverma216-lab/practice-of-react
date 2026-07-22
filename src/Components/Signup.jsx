import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        firstName,
        lastName,
        email,
        password
      });
      alert(response.data.message);
      // Optional: Redirect to login page here
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <p>Create your Eternal Education account</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>
          
          <h5 className="login">Back to login</h5>
          <Link to="/login" className="loginlink"> Login </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;