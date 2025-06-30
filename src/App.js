import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import Projects from './components/Projects/projects.jsx'
import Resume from './components/Resume/resume.jsx'
import Contact from './components/Contact/contact.jsx'
import galaxyVideo from './videos/galaxy.mp4';
import blackHole from './videos/blackhole.mp4';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    document.title="My Portfolio";

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;

      const distanceFromBottom = docHeight - (scrollY + windowHeight);

      // Fade out when within 300px of the bottom
      const fadeThreshold = 300;
      const opacity = Math.max(0, Math.min(1, distanceFromBottom / fadeThreshold));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollClick = () => {
    const nextIndex = (currentIndex + 1) % sectionIds.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="container">

      <HashLink
        smooth
        to={`/#${sectionIds[currentIndex]}`}
        className="scroll-down"
        onClick={handleScrollClick}
        style={{
          opacity: scrollOpacity,
          pointerEvents: scrollOpacity === 0 ? 'none' : 'auto'
        }}
      >
      </HashLink>
        
      <video 
        className="bg-vid" loop autoPlay muted playsInline
        src={galaxyVideo}>
      </video>

      {/*Callout for the Navigation Bar*/}
      <Navbar />  
        
      {/*Callout for the Home Section*/}
      <Home />

      <video
        className="bh-vid" loop autoPlay muted playsInline
        src={blackHole}>
      </video>
        
      {/*Callout for the About Section*/}
      <About />  

      {/*Callout for the Skills Section*/}
      <Skills /> 

      {/*Callout for the Projects Section*/}
      <Projects /> 

      {/*Callout for the Resume Section*/}
      <Resume /> 

      {/*Callout for the Contact Section*/}
      <Contact /> 

      <footer className='footer'>
        <h1>Copyright <span className='copyright-logo'>©</span> Van Bryan Ceniza, Made with React Framework ⚛️</h1>
      </footer>
    </div>
  );
}
export default App;