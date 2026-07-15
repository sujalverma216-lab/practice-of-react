import "./About.css";

function About() {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>About Eternal Education</h1>
        <p>
          Learn Trading with Confidence. Build Wealth with Knowledge.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            Eternal Education is a trading education platform dedicated to
            helping beginners and experienced traders master the financial
            markets. Our mission is to provide practical, easy-to-understand,
            and professional trading education.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We believe that successful trading comes from discipline,
            knowledge, and risk management—not luck. Our goal is to build
            confident traders who can make informed decisions.
          </p>
        </div>

        <div className="about-card">
          <h2>What You'll Learn</h2>

          <ul>
            <li>📈 Price Action Trading</li>
            <li>🕯️ Candlestick Analysis</li>
            <li>📊 Technical Analysis</li>
            <li>💰 Risk Management</li>
            <li>🧠 Trading Psychology</li>
            <li>⚡ Intraday & Swing Trading</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Why Choose Eternal Education?</h2>

          <ul>
            <li>✔ Beginner Friendly Lessons</li>
            <li>✔ Practical Market Examples</li>
            <li>✔ Structured Learning Path</li>
            <li>✔ Lifetime Learning Support</li>
            <li>✔ Professional Mentorship</li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default About;