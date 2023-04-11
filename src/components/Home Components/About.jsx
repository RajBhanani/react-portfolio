import React from "react";

import "../../styles/About.css";

function About() {
  return (
    <div className="about-main">
      <section>
        <h1>Who am I?</h1>
        <p>
          I am Raen, a{" "}
          {new Date().getFullYear() - (new Date().getMonth > 8 ? 2003 : 2004)}{" "}
          years old programmer from India.
        </p>
      </section>
      <section>
        <h1>What do I do?</h1>
        <p>
          I create fullstack websites using UI/UX design and latest trends. I
          also like to learn some low-level programming with C++. I'd like to
          explore the deepest levels of computers and their working.
        </p>
      </section>
      <section>
        <h1>Why do I do this?</h1>
        <p>
          For as long as I can remember, I've been fascinated by the
          intersection of art and technology. Creating beautiful, functional
          digital experiences through web development and UI/UX design allows me
          to combine my passion for design and problem-solving. And when it
          comes to programming, nothing beats the control and precision of C++.
          Working with low-level code lets me explore the inner workings of
          software and hardware, and opens up endless possibilities for
          innovation. Overall, I see technology as a powerful tool for making a
          positive impact on people's lives, and I feel privileged to be able to
          use my skills and creativity to contribute to that goal.
        </p>
      </section>
    </div>
  );
}

export default About;
