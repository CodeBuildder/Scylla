import Home from "../components/home";
import About from "../components/about";
import Techstack from "../components/techstack";
import Education from "../components/education";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Certification from "../components/certifications";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Dashboard() {
  return (
    <div>
      <nav className="navbar">
        <div className="inner-width">
          <a href="/" className="logo"></a>
          <button className="menu-toggler ">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-menu">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#tech">TechStack</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#certification">Certification</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <Home />
      <About />
      <Techstack />
      <Education />
      <Experience />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
