import "./CourseTA.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

function CourseTA() {
  return (
    <div className="ta-container">

      {/* Heading */}
      <h1 className="course-title">
        Technical Analysis
      </h1>

      {/* Description */}
      <section className="description-box">
        <h2>Course Description</h2>

        <p>
          The Technical Analysis Course is designed to help traders understand
          market movements using charts and technical indicators. Learn how to
          identify trends, predict price movements, and make data-driven trading
          decisions. The course includes practical chart analysis, real market
          examples, and weekly assignments to strengthen your trading skills.
        </p>
      </section>

      {/* Course Journey */}
      <section className="journey">

        <h2>Course Journey</h2>

        <div className="module">
          <div>
            <h3>Module 1</h3>
            <p>Introduction to Technical Analysis & Chart Types</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 2</h3>
            <p>Trendlines, Support & Resistance</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 3</h3>
            <p>Moving Averages, RSI & MACD</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 4</h3>
            <p>Volume Analysis & Trading Strategies</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

      </section>

      {/* Learning Outcomes */}
      <section className="learn">

        <h2>After Completion You Will Learn</h2>

        <ul>

          <li><FaCheckCircle /> Chart Reading</li>

          <li><FaCheckCircle /> Trend Identification</li>

          <li><FaCheckCircle /> Support & Resistance</li>

          <li><FaCheckCircle /> Candlestick Confirmation</li>

          <li><FaCheckCircle /> RSI & MACD Analysis</li>

          <li><FaCheckCircle /> Moving Average Strategy</li>

          <li><FaCheckCircle /> Volume Analysis</li>

          <li><FaCheckCircle /> Entry & Exit Planning</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseTA;