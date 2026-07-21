import "./CourseCM.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom"

function CourseCM() {
  return (
    <div className="pat-container">

      {/* Heading */}
      <h1 className="course-title">
        Candlesticks Mastery    
      </h1>

      {/* Description */}

      <section className="description-box">

        <h2>Course Description</h2>

        <p>
          This Candlestick Mastery Course is specially designed for
          beginners and traders.

          You will learn How Candles works on charts, How they are formed.
          Candlestick Patterns,Single Candlestick Pattern, Double Candlestick Pattern, Triple Candlestick Pattern,
          Wick Analysis and Conversion of Candlestick.
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
            <p>Introduction & Candlestick Basics, How They Formed and Working on Chart</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 2</h3>
            <p>Types of Candlestick and Candlestick Patterns (Single/Double/Triple)</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 3</h3>
            <p>Wick Analysis and finding potential in (Buyer/Seller)</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

        <div className="module">

          <div>
            <h3>Module 4</h3>
            <p>Conversion of Candlestick</p>
          </div>

          <FaPlayCircle className="play-icon"/>

        </div>

      </section>

      {/* Learn */}

      <section className="learn">

        <h2>After Completion You Will have the knowledge of:</h2>

        <ul>

          <li><FaCheckCircle /> How Chart Works</li>

          <li><FaCheckCircle /> ability to find Market Direction</li>

          <li><FaCheckCircle /> Trend Analysis</li>

          <li><FaCheckCircle /> Candlestick Psychology</li>

          <li><FaCheckCircle />identifying Market Momentum</li>          

          <li><FaCheckCircle /> Live Market Analysis</li>

          <li><FaCheckCircle /> High Probability Setups</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseCM;