import './App.css';
import galaxyVideo from './videos/galaxy.mp4';
import blackHole from './videos/blackhole.mp4';
import dP from './images/me.png';
import { useEffect } from 'react';
import { LuComputer } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


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
      <header>
        <div className='topleft'>
          <img src={dP} alt="myface"></img>
          <h1><span style={{color: '#9400FF'}}>Van</span>Bryan</h1>
        </div>
      
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
        </ul>

        <div className="box-icons">
          <a href="https://web.facebook.com/vanbryan.ceniza">
            <i className='facebook'><FaFacebook/></i>
          </a>
          <a href="https://github.com/VanCeniza">
            <i className='github'><FaGithub/></i>
          </a>
          <a href="https://mail.google.com/mail/u/cenizavanbryan22@gmail.com/#compose">
            <i className='gmail'><SiGmail/></i>
          </a>
        </div>
      </header>

      <video
        className="bh-vid" loop autoPlay muted playsInline
        src={blackHole}>
      </video>

      <section className='person'>
        <div className='person-info'>
          <div className='person-title'>
            <i><LuComputer /></i>
            Computer Engineer
          </div>

          <h1>Hi i'm Van Bryan Ceniza Computer Engineer</h1>
          <p>I'm a computer engineering student in Technological
            Institute of the Philippines Manila Campus. Feel free
            to check out my portfolio.
          </p>
        </div>
      </section>
    </div>
  );
}
export default App;
