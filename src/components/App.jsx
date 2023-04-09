import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={<Home />} />
          <Route path="/about" Component={<About />} />
          <Route path="/experience" Component={<Experience />} />
          <Route path="/projects" Component={<Projects />} />
          <Route path="/contact" Component={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
