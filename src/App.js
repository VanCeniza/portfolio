import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import galaxyVideo from './videos/galaxy.mp4';
import blackHole from './videos/blackhole.mp4';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title="My Portfolio";
  }, []);

  return (
    <div className="container">

      <div className='scroll-down'></div>
      
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
    </div>
  );
}
export default App;
