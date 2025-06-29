import './navbar.css';
import dP from '../../images/me.png';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useRef, useState } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const navRefs = useRef({}); // Store refs for each link

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    const activeRef = navRefs.current[activeSection];
    if (activeRef) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeRef;
      setIndicatorStyle({
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [activeSection]);
    
    return(
        <header className='head'>
            <div className='topleft'>
                <img src={dP} alt="myface"></img>
                <h1>My<span style={{color: '#9400FF'}}>Portfolio</span></h1>
            </div>
            
                <ul className='nav-list'>
                    {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map(id => (
                        <li key={id}>
                        <HashLink
                            smooth
                            to={`/#${id}`}
                            className={`nav-link ${activeSection === id ? 'active gradient' : ''}`}
                            ref={el => (navRefs.current[id] = el)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </HashLink>
                        </li>
                    ))}
                    <div className="nav-indicator" style={indicatorStyle}></div>
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
    );
}
export default Navbar;