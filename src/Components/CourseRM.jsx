import "./CourseRM.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

function CourseRM() {
  return (
    <div className="rm-container">

      {/* Heading */}
      <h1 className="course-title">
        Risk Management
      </h1>

      {/* Description */}
      <section className="description-box">

        <h2>Course Description</h2>

        <p>
          Risk Management is the foundation of successful trading. The most important thing in trading is 
          not making profits daily but  protecting your capital as long as can. This course
          teaches you how to protect your trading capital while maximizing
          long-term profitability. You will learn position sizing, stop-loss
          placement, risk-to-reward ratio, capital allocation, trading
          psychology, and portfolio management. Through practical examples and
          real market scenarios, you'll develop the discipline required to
          survive and grow consistently in the financial markets.
        </p>

      </section>

      {/* Course Journey */}
      <section className="journey">

        <h2>Course Journey</h2>

        <div className="module">
          <div>
            <h3>Module 1</h3>
            <p>Introduction to Risk Management & Capital Protection</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 2</h3>
            <p>Position Sizing & Risk Per Trade</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 3</h3>
            <p>Stop Loss, Risk-Reward Ratio & Trade Planning</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 4</h3>
            <p>Trading Psychology, Discipline & Portfolio Management</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

      </section>

      {/* Learning Outcomes */}
      <section className="learn">

        <h2>After Completion You Will Learn</h2>

        <ul>

          <li><FaCheckCircle /> Capital Protection Techniques</li>

          <li><FaCheckCircle /> Position Sizing Methods</li>

          <li><FaCheckCircle /> Stop Loss Placement</li>

          <li><FaCheckCircle /> Risk-to-Reward Analysis</li>

          <li><FaCheckCircle /> Perfect Trade Planning & Execution</li>

          <li><FaCheckCircle /> Portfolio Diversification</li>

          <li><FaCheckCircle /> Emotional Control & Trading Discipline</li>

          <li><FaCheckCircle /> Long-Term Wealth Preservation</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseRM;