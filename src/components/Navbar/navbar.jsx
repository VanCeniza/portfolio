import './navbar.css';
import dP from '../../images/me.png';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Navbar() {
    return(
        <header className='head'>
            <div className='topleft'>
                <img src={dP} alt="myface"></img>
                <h1>My<span style={{color: '#9400FF'}}>Portfolio</span></h1>
            </div>
        
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
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