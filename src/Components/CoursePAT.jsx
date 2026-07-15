import "./CoursePAT.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom"

function CoursePAT() {
  return (
    <div className="pat-container">

      {/* Heading */}
      <h1 className="course-title">
        Price Action Trading    
      </h1>

      {/* Description */}

      <section className="description-box">

        <h2>Course Description</h2>

        <p>
          This Price Action Trading Course is specially designed for
          beginners and intermediate traders.

          You will learn Support & Resistance, Trend Analysis,
          Candlestick Patterns, Market Structure, Trading Psychology,
          Risk Management and Live Chart Analysis.

          Every week contains one module along with a practical
          assignment and weekly assessment.
        </p>

      </section>

      {/* Journey */}

      <section className="journey">

        <h2>Course Journey</h2>

        <div className="module">

          <div>
            <h3>Module 1</h3>
            <p>Introduction & Candlestick Basics</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 2</h3>
            <p>Support & Resistance</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 3</h3>
            <p>Trend Analysis & Market Structure</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 4</h3>
            <p>Risk Management & Live Trading</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

      </section>

      {/* Learn */}

      <section className="learn">

        <h2>After Completion You Will have the knowledge of:</h2>

        <ul>

          <li><FaCheckCircle /> Price Action Reading</li>

          <li><FaCheckCircle /> Support & Resistance</li>

          <li><FaCheckCircle /> Trend Analysis</li>

          <li><FaCheckCircle /> Candlestick Psychology</li>

          <li><FaCheckCircle /> Risk Management</li>

          <li><FaCheckCircle /> Trading Discipline</li>

          <li><FaCheckCircle /> Live Market Analysis</li>

          <li><FaCheckCircle /> High Probability Setups</li>

        </ul>

      </section>

    </div>
  );
}

export default CoursePAT;