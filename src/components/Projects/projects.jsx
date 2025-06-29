import './projects.css';
import project1 from '../../videos/project1.mp4';
import project2 from '../../videos/project2.mp4';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from 'react';

function Projects() {
    
    useEffect(() => {
        const video1 = document.getElementById('project1');
        const video2 = document.getElementById('project2');
        const video3 = document.getElementById('project3');
        const hoverSign = document.querySelector(".hover-sign");

        const videoList = [video1, video2, video3];

        videoList.forEach(function(video){
            if (video) {
                video.addEventListener('mouseover', function(){
                    video.play();
                    hoverSign.classList.add("active");
                });
                video.addEventListener('mouseout', function(){
                    video.pause();
                    hoverSign.classList.remove("active");
                });
            }   
        });
    }, []);

    return(
        <section id='projects' className='myprojects'>
           <h1 className='section-title'>My Projects</h1>
           <div className='project-card'>
                <div className='project-vidbox'>
                    <video id='project1'
                        className="project" muted
                        src={project1}>
                    </video>
                    <div className='hover-sign'></div>
                </div>
            </div> 

            <div className='project-info'>
                <h1>Online <span className='gradient'>Web-based Printing </span> Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                
                <a
                    href="https://webprints.pythonanywhere.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    >
                    <FaExternalLinkAlt />
                    Website
                </a>
            </div>

            <div className='project-card'>
                <div className='project-vidbox'>
                    <video id='project2'
                        className="project"
                        src={project2}>
                    </video>
                </div>
            </div> 

            <div className='project-info'>
                <h1>Harbee: <span className='gradient'>Honey Harvester </span> and <span className='gradient'>Monitoring </span> App UI/UX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                
                <a
                    href="https://www.figma.com/proto/uFDDarGR12G0rO6N42V0Wv/UI-UX-Bee-Monitoring-App?node-id=1-44&t=yigYZTqDzpWLahzq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    >
                    <FaExternalLinkAlt />
                    Website
                </a>
            </div>

            <div className='project-card'>
                <div className='project-vidbox'>
                    <video id='project3'
                        className="project"
                        src={project2}>
                    </video>
                </div>
            </div> 

            <div className='project-info'>
                <h1>My <span className='gradient'>Portfolio </span> Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                
                <a
                    href="https://webprints.pythonanywhere.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    >
                    <FaExternalLinkAlt />
                    Website
                </a>
            </div>
               
        </section>
    );
}
export default Projects;