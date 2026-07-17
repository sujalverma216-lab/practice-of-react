import "./ForgetPassword.css";
import { Link } from "react-router-dom"

function ForgetPassword() {
  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h1>Forgot Password</h1>
        <p>Enter your registered mobile number to receive an OTP.</p>

        <form className="forgot-form">

          <label>Registered Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your registered mobile number"
          />

          <button type="button" className="otp-btn">
            Send OTP
          </button>

          <label>Enter OTP</label>
          <input
            type="number"
            placeholder="Enter OTP"
          />

          <button type="submit" className="verify-btn">
            Verify OTP
          </button>
          
          < a href ="http://localhost:5173/login" className="loginlink"> Back to Login</a>


          

        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;