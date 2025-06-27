import './home.css';
import dP from '../../images/portrait.png'
import { LuComputer } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Computer Engineer', 'Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Data Scientist'],
        loop: {},
    })
    return(
        <section className='person'>
            <div className='person-info'>
                <div className='person-title'>
                    <i>
                        <LuComputer />
                        <span>Computer Engineer</span>
                    </i>
                </div>
            
                <h1>
                    Hi I'm <span style={{color: '#36bef0'}}className="name">Van Bryan Ceniza</span>. I'm a <span className="gradient">{text}</span><Cursor cursorStyle=' <' />
                </h1>
            
                <p>
                    I'm a fourth-year computer engineering student at the Technological Institute of the Philippines Manila Campus, 
                    I possess a unique blend of skills in both graphic design and coding. Through my experience in implementing visual designs into the coding process, 
                    I have developed a keen understanding of how to effectively implement designs in a coding environment.
                </p>
            
                <button>
                    <BiMessageSquareDetail />
                    Contact Me
                </button>

            </div>

            <div className='picture-of-me'>
                <img src={dP} alt='myface' className='portrait'></img>
            </div>

        </section>
    );
}
export default Home;