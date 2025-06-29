import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import Projects from './components/Projects/projects.jsx'
import Resume from './components/Resume/resume.jsx'
import galaxyVideo from './videos/galaxy.mp4';
import blackHole from './videos/blackhole.mp4';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function App() {

  useEffect(() => {
    document.title="My Portfolio";
  }, []);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'resume'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollClick = () => {
    const nextIndex = (currentIndex + 1) % sectionIds.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="container">

      <HashLink smooth to={`/#${sectionIds[currentIndex]}`}
        className="scroll-down"
        onClick={handleScrollClick}
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

    </div>
  );
}
export default App;