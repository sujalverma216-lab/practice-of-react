import "./Courses.css";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="courses">
      <div className="courses-container">
        <h1>Trading Courses</h1>
        <p>
          Master the financial markets with our beginner to advanced trading
          programs.
        </p>

        <div className="course-cards">

          <div className="course-card">
            <h2>📈 Price Action Trading</h2>
            <p>
              Learn support & resistance, chart patterns, trend analysis, and
              candlestick psychology.
            </p>
            <Link to="/form">
              <button>Enroll Now  </button>   
            </Link>
            
            <Link to="/coursePAT">
              <button>  Continue   </button>
            </Link>
          </div>

          <div className="course-card">
            <h2>🕯️ Candlestick Mastery</h2>
            <p>
              Understand single, double and multiple candlestick patterns with
              real market examples.
            </p>
            <Link to="/form">
              <button>Enroll Now</button>
            </Link>
            <Link to="/courseCM">
              <button> Continue</button>
            </Link>
          </div>

          <div className="course-card">
            <h2>📊 Technical Analysis</h2>
            <p>
              Learn indicators, moving averages, RSI, MACD, volume and trend
              analysis.
            </p>
            <Link to="/form">
              <button>Enroll Now</button>
            </Link>
            
            <Link to="/courseTA">
              <button> Continue</button>
            </Link>

            
          </div>

          <div className="course-card">
            <h2>💰 Risk Management</h2>
            <p>
              Protect your capital with proper position sizing, stop loss and
              risk-reward strategies.
            </p>
            <Link to="/form">
              <button>Enroll Now</button>
            </Link>

            <Link to="/courseRM">
              <button> Continue</button>
            </Link>
          </div>

          <div className="course-card">
            <h2>⚡ Intraday Trading</h2>
            <p>
              Learn entry, exit, momentum trading and daily trading strategies.
            </p>
            <Link to="/form">
              <button>Enroll Now</button>
            </Link> 

            <Link to="/courseIT">
            <button> Continue</button>
            </Link>

          </div>

          <div className="course-card">
            <h2>🧠 Trading Psychology</h2>
            <p>
              Control emotions, avoid overtrading and build a disciplined
              trading mindset.
            </p>
            <Link to="/form">
              <button>Enroll Now</button>
            </Link>

            <Link to="/courseTP">
              <button> Continue</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Courses;