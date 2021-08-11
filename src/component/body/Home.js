import React from "react";
import { Link } from "react-router-dom";
import back from "../images/background.jpg";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img className="home_background" src={back} alt="hatter" />
      <Link className="link" to="/aboutus">
        <h1 className="home_title">SHOP NOW</h1>
      </Link>
    </div>
  );
}

export default Home;
