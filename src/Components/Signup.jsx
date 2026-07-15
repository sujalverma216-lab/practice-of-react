import "./Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <p>Create your Eternal Education account</p>

        <form className="signup-form">

          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="row">
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;