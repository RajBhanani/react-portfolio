import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HRCx3YTKjKJQ7BWXHod5uwHaFj%26pid%3DApi&f=1&ipt=dbecb0da5e271067f5b670373c8a8320e9dc9d0b3be8de5683b431fbabc961df&ipo=images"
          alt="logo"
        />
        <h3>Raen Death Vietor</h3>
      </div>
      {/* <div className="nav"> */}
      <div className="items">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/experience`}>Experience</Link>
        <Link to={`/projects`}>Projects</Link>
        <Link to={`/contact`}>Contact</Link>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Navbar;
