import './resume.css';
import cert1 from '../../images/cert1.png';
import cert2 from '../../images/cert2.png';
import cert3 from '../../images/cert3.png';
import cv from '../../images/cvpreview.png';
import React, { useState, useRef } from 'react';

const educationData = [
  { label: 'Elementary', year: '2009 – 2016', school: 'Mauban South Central Elementary School I', details: 'Introduced to foundational academic disciplines.' },
  { label: 'Junior High School', year: '2016 – 2020', school: 'Dr. Maria D. Pastrana National Science Oriented High School', details: 'Graduated Grade 8 to 10 w/ Honors.' },
  { label: 'Senior High School', year: '2020 – 2022', school: 'Dr. Maria D. Pastrana National Science Oriented High School', details: 'Picked STEM as SHS Strand. Graduated Grade 11 to 12 w/ Honors.' },
  { label: 'College', year: '2022 – Present', school: 'Technological Institute of the Philippines Manila', details: 'Pursuing BS in Computer Engineering.' },
];

const certificateData = [
  <img src={cert1} alt="Certificate 1" className='certificate-img' />,
  <img src={cert2} alt="Certificate 2" className='certificate-img' />,
  <img src={cert3} alt="Certificate 3" className='certificate-img' />,
];

function Resume() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const scrollUp = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            carouselRef.current.style.transform = `translateY(-${newIndex * 220}px)`;
        }
    };

    const scrollDown = () => {
        if (currentIndex < certificateData.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            carouselRef.current.style.transform = `translateY(-${newIndex * 220}px)`;
        }
    };

    return(
    <section id='resume' class="resume-section">
        <h1 className='resume-section-title'> My Resume</h1>
        <div className="education-timeline">
        <h1 className="education-title">Education</h1>
        <div className="timeline fadeInLeft">
            {educationData.map((item, index) => (
                <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
            <div className="dot" />
                <div className="content">
                    <strong>{item.label}</strong>
                    <br />
                    <span>{item.year}</span>
                    <span>{item.school}</span>
                    <p>{item.details}</p>
                </div>
            </div>
        ))}
        </div>
        </div>

    <div className='cv-placeholder'>
        <h2>Curriculum Vitae</h2>
        <a className='download-btn' href="Van_Ceniza_CV.pdf" download="Ceniza_CV.pdf" >
            Download CV
        </a>
        <img src={cv} alt='mycv' className='preview'></img>
    </div>

    <div className="certificates-carousel">
        <h2>Certificates</h2>
        <div className="carousel-viewport">
            <div className="carousel-inner" ref={carouselRef}>
                {certificateData.map((cert, index) => (
                <div key={index} className="carousel-item">
                    {cert}
                </div>
                ))}
            </div>
            <div className="carousel-fade top-fade"></div>
            <div className="carousel-fade bottom-fade"></div>
        </div>
        <div className="carousel-controls">
          <button onClick={scrollUp}>▲</button>
          <button onClick={scrollDown}>▼</button>
        </div>
    </div>
    </section>
    );
}
export default Resume;