"use client"

import "./navbar.css"
import dP from "../../images/me.png"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { HashLink } from "react-router-hash-link"
import { useEffect, useRef, useState, useCallback } from "react"

function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRefs = useRef({}) // Store refs for each link
  const updateTimeoutRef = useRef(null) // Add this for debouncing

  // Add this debounced setter function after the existing refs:
  const setActiveSectionDebounced = useCallback(
    (sectionId) => {
      // Clear any pending updates
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }

      // Only update if it's actually different
      if (sectionId !== activeSection) {
        updateTimeoutRef.current = setTimeout(() => {
          setActiveSection(sectionId)
        }, 50) // Small delay to prevent twitching
      }
    },
    [activeSection],
  )

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        // Create a map of all currently intersecting sections
        const intersectingSections = new Map()

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.set(entry.target.id, entry.intersectionRatio)
          }
        })

        // If we have intersecting sections, find the best one
        if (intersectingSections.size > 0) {
          // Find section with highest intersection ratio
          let bestSection = null
          let highestRatio = 0

          intersectingSections.forEach((ratio, sectionId) => {
            if (ratio > highestRatio) {
              highestRatio = ratio
              bestSection = sectionId
            }
          })

          // Special handling for potentially problematic sections
          if (intersectingSections.has("resume")) {
            const resumeRatio = intersectingSections.get("resume")
            // Lower threshold for resume section
            if (resumeRatio > 0.1 && (bestSection === "resume" || resumeRatio > highestRatio * 0.7)) {
              bestSection = "resume"
            }
          }

          if (bestSection) {
            setActiveSectionDebounced(bestSection)
          }
        }
      },
      {
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // More granular thresholds
        rootMargin: "-5% 0px -5% 0px", // Smaller margin for better detection
      },
    )

    // Also add a scroll-based fallback detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          // Special case for resume - be more lenient
          if (section.id === "resume") {
            const resumeCenter = sectionTop + rect.height / 2
            const tolerance = rect.height * 0.3 // 30% tolerance

            if (Math.abs(scrollPosition - resumeCenter) <= tolerance) {
              setActiveSectionDebounced("resume")
            }
          }
        }
      })
    }

    // Use both intersection observer and scroll fallback
    sections.forEach((section) => observer.observe(section))

    // Add scroll listener as backup
    let scrollTimeout
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 50)
    }

    window.addEventListener("scroll", debouncedScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", debouncedScroll)
      clearTimeout(scrollTimeout)
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current) // Add this cleanup
      }
    }
  }, [setActiveSectionDebounced])

  // Improved indicator positioning with zoom resistance
  const updateIndicatorPosition = useCallback(() => {
    const activeRef = navRefs.current[activeSection]
    if (activeRef) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        try {
          // Use getBoundingClientRect for more accurate measurements
          const rect = activeRef.getBoundingClientRect()
          const parentRect = activeRef.parentElement.parentElement.getBoundingClientRect()

          // Calculate relative position within the nav container
          const relativeLeft = rect.left - parentRect.left
          const relativeTop = rect.top - parentRect.top

          setIndicatorStyle({
            left: Math.round(relativeLeft), // Round to prevent fractional pixels
            top: Math.round(relativeTop),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          })
        } catch (error) {
          // Fallback to offset properties if getBoundingClientRect fails
          const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeRef
          setIndicatorStyle({
            left: offsetLeft,
            top: offsetTop,
            width: offsetWidth,
            height: offsetHeight,
          })
        }
      })
    }
  }, [activeSection])

  useEffect(() => {
    updateIndicatorPosition()
  }, [updateIndicatorPosition])

  // Add resize and zoom event listeners
  useEffect(() => {
    let timeoutId

    const handleResize = () => {
      // Debounce the resize handler to prevent excessive calls
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        updateIndicatorPosition()
      }, 100)
    }

    // Listen for resize events (which includes zoom changes)
    window.addEventListener("resize", handleResize)

    // Also listen for orientation changes on mobile
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      clearTimeout(timeoutId)
    }
  }, [updateIndicatorPosition])

  // Force recalculation when component mounts or updates
  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicatorPosition()
    }, 50)

    return () => clearTimeout(timer)
  }, [updateIndicatorPosition])

  return (
    <header className="head">
      <div className="topleft">
        <img src={dP || "/placeholder.svg"} alt="myface"></img>
        <h1>
          My<span style={{ color: "#9400FF" }}>Portfolio</span>
        </h1>
      </div>

      <ul className="nav-list">
        {["home", "about", "skills", "projects", "resume", "contact"].map((id) => (
          <li key={id}>
            <HashLink
              smooth
              to={`/#${id}`}
              className={`nav-link ${activeSection === id ? "active gradient" : ""}`}
              ref={(el) => (navRefs.current[id] = el)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </HashLink>
          </li>
        ))}
        <div className="nav-indicator" style={indicatorStyle}></div>
      </ul>

      <div className="box-icons">
        <a href="https://web.facebook.com/vanbryan.ceniza">
          <i className="facebook">
            <FaFacebook />
          </i>
        </a>

        <a href="https://github.com/VanCeniza">
          <i className="github">
            <FaGithub />
          </i>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cenizavanbryan22@gmail.com&su=Portfolio+Feedback&body=Hi+Van%2C%0A%0AI+really+enjoyed+your+portfolio!+Can+we+connect%3F">
          <i className="gmail">
            <SiGmail />
          </i>
        </a>
      </div>
    </header>
  )
}
export default Navbar
