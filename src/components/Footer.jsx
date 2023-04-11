import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import "../styles/Footer.css";

function Footer() {
  const location = useLocation();
  const [{ footerBackground }, setFooterBackground] = useState({});
  useEffect(() => {
    if (location.pathname === "/skills") {
      setFooterBackground({
        footerBackground: "#422D53",
      });
    }
    if (location.pathname === "/experience") {
      setFooterBackground({
        footerBackground: "#912E54",
      });
    }
    if (location.pathname === "/projects") {
      setFooterBackground({
        footerBackground: "#D1788F",
      });
    }
  }, [location]);
  return (
    <footer
      style={{
        backgroundColor: footerBackground,
        transition: "ease-out 0.2s",
      }}
    >
      <a href="https://github.com/RajBhanani" target="_blank">
        <GitHubIcon fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/raj-bhanani/" target="_blank">
        <LinkedInIcon fontSize="large" />
      </a>
      
    </footer>
  );
}

export default Footer;
