import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {location.pathname != "/" && <Footer />}
    </>
  );
}

export default App;
