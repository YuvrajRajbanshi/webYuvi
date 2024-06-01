import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Certifcate from "./pages/Certificate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certifcate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
