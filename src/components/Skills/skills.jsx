import './skills.css';
import bigbrain from '../../images/digital brain.png';
import py from '../../images/1.png';
import cplus from '../../images/2.png';
import figma from '../../images/4.png';
import css from '../../images/5.png';
import git from '../../images/6.png';
import html from '../../images/7.png';
import js from '../../images/8.png';
import ps from '../../images/9.png';
import xd from '../../images/10.png';
import ae from '../../images/11.png';
import pr from '../../images/12.png';
import react from '../../images/13.png';
import filmora from '../../images/14.png';

function Skills() {
    return(
        <section id='skills' className='skills-section'>
            <h1 className='skills-section-title'> My Skills</h1>
            <div className='container-skills'>
                <img src={bigbrain} alt='utak' className='skills-image'></img>
                <div className='designer'>
                    <h1 className='gradient'>Designer</h1>
                    <p>Well-versed in design platforms like Figma and Adobe XD, I bring both 
                        creative vision and technical precision to the table. I specialize 
                        in combining visual aesthetics with practical functionality to craft 
                        intuitive, engaging user experiences that not only look great but also 
                        feel seamless and responsive across devices.</p>
                </div>
                
                <div className='coder'>
                    <h1 className='gradient'>Coder</h1>
                    <p>I'm well-versed in HTML, CSS, and JavaScript, with hands-on 
                        experience using modern frameworks such as React and Node.js 
                        to build responsive and interactive web applications. Additionally, 
                        I have a solid foundation in Python and C++, which I’ve used for 
                        algorithmic problem-solving, data manipulation, and backend logic. 
                        My growing toolkit allows me to approach development with both 
                        front-end creativity and back-end logic in mind. </p>
                </div>

                <div className='slider' reverse='true' style={{
                    '--width': '100px',
                    '--height': '100px',
                    '--quantity': '13'}}  
                >
                    <div className='list'>
                        <div className='item' style={{'--position': '1'}}><img src={py} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '2'}}><img src={cplus} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '3'}}><img src={figma} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '4'}}><img src={css} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '5'}}><img src={html} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '6'}}><img src={js} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '7'}}><img src={react} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '8'}}><img src={ps} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '9'}}><img src={xd} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '10'}}><img src={git} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '11'}}><img src={ae} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '12'}}><img src={pr} alt='slider-image'></img></div>
                        <div className='item' style={{'--position': '13'}}><img src={filmora} alt='slider-image'></img></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;