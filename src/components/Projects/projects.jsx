import './projects.css';
import project1 from '../../videos/project1.mp4';
import project2 from '../../videos/project2.mp4';
import project3 from '../../videos/project3.mp4';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    const video1 = document.getElementById('project1');
    const video2 = document.getElementById('project2');
    const video3 = document.getElementById('project3');
    const hoverSign = document.querySelector(".hover-sign");

    const videoList = [video1, video2, video3];

    videoList.forEach(function(video) {
      if (video) {
        video.addEventListener('mouseover', function() {
          video.play();
          hoverSign.classList.add("active");
        });
        video.addEventListener('mouseout', function() {
          video.pause();
          hoverSign.classList.remove("active");
        });
      }
    });
  }, []);

  return (
    <section id='projects' className='myprojects'>
      <h1 className='section-title'>My Projects</h1>

      {/* Project 1 */}
      <div className='project-card'>
        <div className='project-vidbox'>
          <video id='project1' className="project" muted src={project1}></video>
          <div className='hover-sign'></div>
        </div>
        <div className='project-info'>
          <h1>Online <span className='gradient'>Web-based Printing </span> Services</h1>
          <p>Our project in Software Design during our second year of college involved presenting 
            a website that offered printing shop business owners a way to expand beyond their 
            physical stores. The platform enabled them to set up an online store and connect with customers 
            who wanted a more convenient way to access printing services. Through our website, 
            users could place orders and have their printed materials delivered to them via 
            existing logistics companies.</p>
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
      </div>

      {/* Project 2 */}
      <div className='project-card'>
        <div className='project-vidbox'>
          <video id='project2' className="project" muted src={project2}></video>
        </div>
        <div className='project-info'>
          <h1>Harbee: <span className='gradient'>Honey Harvester </span> and <span className='gradient'>Monitoring </span> App UI/UX</h1>
          <p>A simple mobile UI/UX design we presented during our Methods of Research class in our third year of college. 
            I created it by envisioning one of our proposed design options specifically, Option 3, 
            which involved developing a mobile app that allows users to monitor and conveniently 
            harvest honey once our prototype has finished collecting it
          </p>
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
      </div>

      {/* Project 3 */}
      <div className='project-card'>
        <div className='project-vidbox'>
          <video id='project3' className="project" muted src={project3}></video>
        </div>
        <div className='project-info'>
          <h1>My <span className='gradient'>Portfolio </span> Website</h1>
          <p>My most recent personal project is a portfolio website that I developed using the React framework. 
            It features dynamic DOM manipulation and serves as a platform to showcase my skills, projects, and resume. 
            This website also represents my ongoing experimentation with React, and I plan to continuously improve 
            it as I learn new techniques and technologies moving forward.</p>
          <a
            href="https://vanceniza.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaExternalLinkAlt />
            Website
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;