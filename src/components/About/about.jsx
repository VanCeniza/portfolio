"use client"

import "./about.css"
import grid0 from "../../images/grid0.png"
import grid1 from "../../images/grid1.png"
import earth from "../../videos/glob.mp4"
import grid2 from "../../images/grid2.png"
import { useEffect } from "react"

function About() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const moveX = -x * 0.05 // Reduced intensity for better UX
        const moveY = -y * 0.05

        card.style.transform = `translate(${moveX}px, ${moveY}px)`
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = `translate(0, 0)`
      })
    })
  }, [])

  return (
    <section id="about" className="info-section">
      <h1 className="section-title">About Me</h1>
      <div className="info-cards">
        <div className="card">
          <div className="card-content">
            <h1 className="time">Time Management</h1>
            <p>
              I'm highly flexible with time zones and locations. Based in Manila, Philippines, I'm open to collaborating
              on remote projects with teams around the world.
            </p>
          </div>
          <video className="card-vid" loop autoPlay muted playsInline src={earth}></video>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="stack">Tech Stack</h1>
            <p>
              As a student, I'm actively exploring a variety of programming languages, frameworks, and development tools
              to equip myself with the skills needed to build robust, scalable applications.
            </p>
          </div>
          <img src={grid1 || "/placeholder.svg"} alt="card-grid" className="tech-stack"></img>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="greet">Hello there</h1>
            <p>
              I'm an incoming 4th-year student at the Technological Institute of the Philippines Manila, currently
              pursuing a degree in Computer Engineering with a specialization in Data Science. I'm actively honing my
              skills in front-end development and aiming to expand into back-end as well—creating aesthetically
              pleasing, user-friendly interfaces atop dynamic and responsive websites.
            </p>
          </div>
          <img src={grid0 || "/placeholder.svg"} alt="card-face" className="card-face"></img>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="techie">Tech Enthusiast</h1>
            <p>
              I'm a tech enthusiast with a background in Computer Engineering, passionate about both programming 
              and creating interactive, visually engaging designs. I’m constantly exploring new 
              technologies and pushing my creative and technical skills forward.
            </p>
          </div>
          <img src={grid2 || "/placeholder.svg"} alt="card-grid" className="tech-enjoyer"></img>
        </div>
      </div>
    </section>
  )
}
export default About