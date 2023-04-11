import React from "react";

import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-main">
      <div className="skills">
        <h1>Skills</h1>
        <div className="proficiency">
          <p className="high">High</p>
          <p className="moderate">Moderate</p>
          <p className="low">Low</p>
        </div>
        <div className="sections">
          <section>
            <h3>Core Programming</h3>
            <hr />
            <p className="moderate">C++</p>
            <p className="moderate">Python</p>
            <p className="moderate">DSA</p>
          </section>
          <section>
            <h3>
              Frontend
              <br />
              Web Development
            </h3>
            <hr />
            <p className="moderate">HTML</p>
            <p className="moderate">CSS</p>
            <p className="low">JS</p>
            <p className="moderate">ReactJS</p>
          </section>
          <section>
            <h3>
              Backend
              <br />
              Web Development
            </h3>
            <hr />
            <p className="low">NodeJS</p>
            <p className="moderate">Django</p>
            <p className="low">Flask</p>
          </section>
          <section>
            <h3>Other Skills</h3>
            <hr />
            <p className="moderate">SQL, NoSQL</p>
            <p className="moderate">UI / UX</p>
            <p className="moderate">Graphic design</p>
          </section>
        </div>
      </div>
      <div className="certificates">
        <h1>Certificates</h1>
        <section className="certificate-item">
          <img
            src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N5FLBKNPNSG3/CERTIFICATE_LANDING_PAGE~N5FLBKNPNSG3.jpeg"
            alt="IBM Full Stack Developer"
          />
          <h2>IBM Full Stack Software Developer</h2>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/N5FLBKNPNSG3"
            target="_blank"
          >
            Verify
          </a>
        </section>
      </div>
      <div className="courses"></div>
    </div>
  );
}

export default Skills;
