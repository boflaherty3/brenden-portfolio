import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
/*import About from "./pages/About";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";*/

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/*<Route path="/about" element={<About />} />*/}
            <Route path="/skills" element={<Skills />} />
            {/*<Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </main>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;