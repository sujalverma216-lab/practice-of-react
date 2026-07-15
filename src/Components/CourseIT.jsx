import "./CourseIT.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

function CourseIT() {
  return (
    <div className="pat-container">

      {/* Heading */}
      <h1 className="course-title">
        Intraday Trading
      </h1>

      {/* Description */}
      <section className="description-box">

        <h2>Course Description</h2>

        <p>
          The Intraday Trading Course is designed for traders who want to
          understand how to trade within a single trading session. Learn how
          to identify high-probability setups, select the right stocks,
          manage risk, and execute trades with confidence. The course includes
          live market examples, chart analysis, and practical assignments to
          develop consistency in intraday trading.
        </p>

      </section>

      {/* Journey */}
      <section className="journey">

        <h2>Course Journey</h2>

        <div className="module">
          <div>
            <h3>Module 1</h3>
            <p>Introduction to Intraday Trading & Market Basics</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 2</h3>
            <p>Stock Selection, Time Frames & Market Open Strategy</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 3</h3>
            <p>Entry, Exit, Stop Loss & Trade Management</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 4</h3>
            <p>Live Market Strategy, Psychology & Daily Trading Plan</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

      </section>

      {/* Learn */}
      <section className="learn">

        <h2>After Completion You Will Learn</h2>

        <ul>

          <li><FaCheckCircle /> Intraday Trading Fundamentals</li>

          <li><FaCheckCircle /> Stock Selection Techniques</li>

          <li><FaCheckCircle /> Market Opening Strategies</li>

          <li><FaCheckCircle /> Entry & Exit Planning</li>

          <li><FaCheckCircle /> Stop Loss & Target Setting</li>

          <li><FaCheckCircle /> Risk Management for Intraday</li>

          <li><FaCheckCircle /> Trading Psychology</li>

          <li><FaCheckCircle /> Consistent Daily Trading Routine</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseIT;