import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import FocusAreas from "./components/FocusAreas";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <FocusAreas />
      <Projects />
      <Research />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;