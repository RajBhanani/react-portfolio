import React from "react";

import "../../styles/Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-image">
        <img
          src="https://drive.google.com/uc?export=view&id=1VBRGE6JU6ZAO7PMwGqV2Gmw35-y0mZ9Q"
          alt="me"
        />
      </div>
      <div className="intro-text">
        <div className="heading">
          <div className="hello">
            {"Hello There".split("").map((letter, index) => {
              return <h1 key={index}>{letter === " " ? "\u00A0" : letter}</h1>;
            })}
          </div>
          <p>(General Kenobi!)</p>
        </div>
        <p>
          I am Raen Death Vietor, a zealous Web Developer who does Frontend,
          Backend, and also your mother. I am also very interested in C++ and
          everything associated with it.
        </p>
      </div>
    </div>
  );
}

export default Intro;
