import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import About from './components/About/about.jsx';
import galaxyVideo from './videos/galaxy.mp4';
import blackHole from './videos/blackhole.mp4';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title="My Portfolio";
  }, []);

  return (
    <div className="container">
      <video 
        className="bg-vid" loop autoPlay muted playsInline
        src={galaxyVideo}>
      </video>

      {/*Callout for the Navigation Bar*/}
      <Navbar />  
      
      {/*Callout for the About Section*/}
      <About />  

      <video
        className="bh-vid" loop autoPlay muted playsInline
        src={blackHole}>
      </video>

      <div className='scroll-down'></div>
      
    </div>
  );
}
export default App;
