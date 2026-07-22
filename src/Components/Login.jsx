import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState, useRef } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {  
      setEmailError("email");
      emailRef.current.focus();
      return;
    } else if (!emailRegex.test(email)) {
      alert("Enter a valid Email Address.");
      setEmailError("email");
      emailRef.current.focus();
      return;  
    }  

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password
      });
      
      // Save token for protected routes
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");
      navigate("/workspace"); // Redirect to workspace
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            className={emailError ? "error-input": ""}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Login</button>

          <p className="signup-text">
            <b>Don't have an account? </b>
            <a href="https://eternal-education-pied.vercel.app/signup" className="signuplink"> Signup</a>
          </p>

          <p className="passresetbutton">
            <Link to="/forgetpassword">
              <button type="button">Password Reset</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;