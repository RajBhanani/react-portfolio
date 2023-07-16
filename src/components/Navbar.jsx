import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [{ navBackgroundColor, hoverStyle }, setNavStyle] = useState("");
  const [isHover, setIsHover] = useState({
    home: false,
    skills: false,
    experience: false,
    projects: false,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setNavStyle({
        navBackgroundColor: "#201F41",
        hoverStyle: { backgroundColor: "#2a294f", transition: "ease-out 0.2s" },
      });
    }
    if (location.pathname === "/skills") {
      setNavStyle({
        navBackgroundColor: "#422D53",
        hoverStyle: { backgroundColor: "#4c375d", transition: "ease-out 0.2s" },
      });
    }
    if (location.pathname === "/experience") {
      setNavStyle({
        navBackgroundColor: "#912E54",
        hoverStyle: { backgroundColor: "#a03b62", transition: "ease-out 0.2s" },
      });
    }
    if (location.pathname === "/projects") {
      setNavStyle({
        navBackgroundColor: "#D1788F",
        hoverStyle: { backgroundColor: "#cd6b85", transition: "ease-out 0.2s" },
      });
    }
  }, [location]);

  return (
    <header
      style={{
        backgroundColor: navBackgroundColor,
        transition: "ease-out 0.2s",
      }}
    >
      <div className="logo">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HRCx3YTKjKJQ7BWXHod5uwHaFj%26pid%3DApi&f=1&ipt=dbecb0da5e271067f5b670373c8a8320e9dc9d0b3be8de5683b431fbabc961df&ipo=images"
          alt="logo"
        />
        <h3>Raj</h3>
      </div>
      {/* <div className="nav"> */}
      <div className="items">
        <NavLink
          className="item"
          onMouseEnter={(prev) => {
            setIsHover({ ...prev, home: true });
          }}
          onMouseLeave={(prev) => setIsHover({ ...prev, home: false })}
          style={isHover.home ? hoverStyle : {}}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="item"
          onMouseEnter={(prev) => {
            setIsHover({ ...prev, skills: true });
          }}
          onMouseLeave={(prev) => setIsHover({ ...prev, skills: false })}
          style={isHover.skills ? hoverStyle : {}}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className="item"
          onMouseEnter={(prev) => {
            setIsHover({ ...prev, experience: true });
          }}
          onMouseLeave={(prev) => setIsHover({ ...prev, experience: false })}
          style={isHover.experience ? hoverStyle : {}}
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className="item"
          onMouseEnter={(prev) => {
            setIsHover({ ...prev, projects: true });
          }}
          onMouseLeave={(prev) => setIsHover({ ...prev, projects: false })}
          style={isHover.projects ? hoverStyle : {}}
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Navbar;
