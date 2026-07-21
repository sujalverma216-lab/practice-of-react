import "./CourseTP.css";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

function CourseTP() {
  return (
    <div className="pat-container">

      {/* Heading */}
      <h1 className="course-title">
        Trading Psychology
      </h1>

      {/* Description */}
      <section className="description-box">

        <h2>Course Description</h2>

        <p>
          Trading Psychology is one of the most important pillars of successful
          trading. This course focuses on developing the right mindset,
          emotional control, patience, discipline, and confidence required to
          become a consistently profitable trader. Learn how to overcome fear,
          greed, overtrading, revenge trading, and build a professional trading
          routine through practical exercises and real-life trading scenarios.
        </p>

      </section>

      {/* Course Journey */}
      <section className="journey">

        <h2>Course Journey</h2>

        <div className="module">
          <div>
            <h3>Module 1</h3>
            <p>Introduction to Trading Psychology & Mindset</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 2</h3>
            <p>Fear, Greed & Emotional Control</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 3</h3>
            <p>Discipline, Patience & Trading Routine</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

        <div className="module">
          <div>
            <h3>Module 4</h3>
            <p>Building Confidence & Long-Term Consistency</p>
          </div>
          <FaPlayCircle className="play-icon" />
        </div>

      </section>

      {/* Learning Outcomes */}
      <section className="learn">

        <h2>After Completion You Will Learn</h2>

        <ul>

          <li><FaCheckCircle /> Emotional Control During Trades</li>

          <li><FaCheckCircle /> Managing Fear & Greed</li>

          <li><FaCheckCircle /> Building Trading Discipline</li>

          <li><FaCheckCircle /> Avoiding Overtrading & Revenge Trading</li>

          <li><FaCheckCircle /> Developing Patience & Consistency</li>

          <li><FaCheckCircle /> Creating a Professional Trading Routine</li>

          <li><FaCheckCircle /> Decision Making Under Pressure</li>

          <li><FaCheckCircle /> Long-Term Trader Mindset</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseTP;