import React from "react";
import "../styles/Home.css";
import Intro from "./Home Components/Intro";
import About from "./Home Components/About";
import Sitemap from "./Home Components/Sitemap";

function Home() {
  return (
    <div className="home-main">
      <section className="content" id="intro">
        <Intro />
      </section>
      <section className="content" id="about">
        <About />
      </section>
      <section className="content" id="side">
        <Sitemap />
      </section>
    </div>
  );
}

export default Home;
