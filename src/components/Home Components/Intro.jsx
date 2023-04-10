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
              <h1>Hello There</h1>
              <p>(General Kenobi!)</p>
            </div>
            <p>
              I am Raen Death Vietor, a zealous Web Developer who does Frontend,
              Backend, and also your mother. I am also very interested in C++
              and everything associated with it. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Itaque saepe velit laudantium nisi?
              Quaerat soluta nostrum exercitationem tenetur rem pariatur,
              mollitia ducimus quo!
            </p>
          </div>
    </div>
  );
}

export default Intro;
