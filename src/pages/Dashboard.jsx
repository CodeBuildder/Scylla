import Home from '../components/home'
import About from '../components/about'
import Techstack from '../components/techstack'



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
            <a href="#services">Insights</a>
            <a href="#education">Education</a>
            <a href="#certification">Certification</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Home />
      <About />
      <Techstack />





    </div>
  );
}
