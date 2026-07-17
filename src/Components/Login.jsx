import { Link } from "react-router-dom";
import "./Login.css";
import { useState, useRef } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

if (email.trim() === "") {  
      setEmailError("email");
      emailRef.current.focus();
      return;
}

else if (!emailRegex.test(email)) {
      alert("Enter a valid Email Address.");
      setErrorField("email");
      emailRef.current.focus();
      return;  
}  


    // Login logic here
    alert("Login Successful");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>

          <label className="email" >Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
              
            }}
            className={emailError ?  "error-input": ""}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            <b>Don't have an account? </b>
            <a href ="http://localhost:5173/signup" className="signuplink"> Signup</a>
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