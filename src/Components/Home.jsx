import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import bg1 from "../assets/Bg1.jpg";
import bg2 from "../assets/Bg2.jpg";
import bg3 from "../assets/Bg3.jpg";
import bg4 from "../assets/Bg4.jpg";

function Home() {

  const images = [bg1, bg2, bg3, bg4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="overlay">
        <div className="hero">
          <h1>Welcome to Eternal Education</h1>

          <p>
            Learn Trading from Beginner to Professional Level.
          </p>

          <Link to="/courses">
            <button className="btn">
              Explore Courses →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;