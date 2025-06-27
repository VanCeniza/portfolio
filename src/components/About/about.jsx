import './about.css';
import grid0 from '../../images/grid0.png';
import grid1 from '../../images/grid1.png';
import earth from '../../videos/glob.mp4';
import grid2 from '../../images/grid2.png';

function About() {
    return(
        <section className='info-section'>
            <h1 className='section-title'>About Me</h1>
            <div className='info-cards'>
                <div className='card'>
                    <h1 className='time'>Time Management</h1>
                    <p>I'm highly flexible with time zones and locations. Based in Manila, Philippines, 
                        I'm open to collaborating on remote projects with teams around the world.
                    </p>
                    <video className="card-vid" loop autoPlay muted playsInline
                    src={earth}></video>
                </div>

                <div className='card'>
                    <h1 className='stack'>Tech Stack</h1>
                    <p>As a student, I'm actively exploring a variety of programming languages, frameworks, 
                        and development tools to equip myself with the skills needed to build robust, scalable applications.
                    </p>
                    <img src={grid1} alt="card-grid" className='tech-stack'></img>
                </div>

                <div className='card'>
                    <h1 className='greet'>Hello there</h1>
                    <p>I'm an incoming 4th-year student at the Technological Institute of the Philippines Manila, 
                        currently pursuing a degree in Computer Engineering with a specialization in Data Science. 
                        I'm actively honing my skills in front-end development and aiming to expand into back-end 
                        as well—creating aesthetically pleasing, user-friendly interfaces atop dynamic and responsive websites.
                    </p>
                    <img src={grid0} alt="card-face" className='card-face'></img>
                </div>

                <div className='card'>
                    <h1 className='techie'>Tech Enthusiast</h1>
                    <p>When it comes to technology, there's no doubt about my passion—I'm a huge fan of tech reviewers on streaming platforms. 
                        That fascination sparked my decision to pursue a degree in Computer Engineering, where I could dive deep into how computers 
                        work and how complex systems can be simulated within these virtual machines. Alongside my interest in programming and 
                        building functional logic, I’ve developed a strong love for crafting aesthetically pleasing, interactive designs that users can truly engage with. 
                        Whether it's exploring emerging technologies or sharpening my coding and design skills, I’m always eager to push my capabilities further.
                    </p>
                    <img src={grid2} alt="card-grid" className='tech-enjoyer'></img>
                </div>   
            </div>
        </section>
    );
}
export default About;