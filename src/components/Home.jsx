import React from "react";
import "../styles/Home.css";
import Intro from "./Home Components/Intro";
import About from "./Home Components/About";
import Sitemap from "./Home Components/Sitemap";
import { useHref } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <section className="content" id="intro">
        <Intro />
      </section>
      <section className="content" id="about">
        <About />
      </section>
      <section className="content" id="side">
        <Sitemap />
      </section>

      {/* <SideNav className="content-nav"/> */}
    </div>
  );
}

export default Home;
