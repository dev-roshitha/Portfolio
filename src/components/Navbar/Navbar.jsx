import React, { useEffect, useState } from "react"
//import { NavLink } from "react-router-dom"
import { Link } from 'react-scroll'
import gsap from "gsap"

const Navbar = () => {

  const [className, setClassName] = useState("")

  useEffect(() => {
  gsap.from(".navigation", {
    x: -300,
    duration: 1,
    ease: "bounce",
    opacity: 0
  })
  }, [])

  const handleMouseOver = () => {
    setClassName('span-nav')
  }
  const handleMouseOut = () => {
    setClassName('')
  }

  return(<>
      <div className={`navigation ${className}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} id="naviSpan">
        <div className="inner-navigation">
          <ul className="links">
            <li className="link">
              <Link to="home" offset={-150} smooth={true} duration={500} className="listItems">
                <i className="fa-solid fa-house"></i>
                <span className="spanList">Home</span>
              </Link>
            </li>
            <li className="link">
              <Link to="about" smooth={true} duration={500} className="listItems">
                <i className="fa-solid fa-circle-info"></i>
                <span className="spanList">About</span>
              </Link>
            </li>
            <li className="link">
              <Link to="education" smooth={true} duration={500} className="listItems">
                <i className="fa-solid fa-graduation-cap"></i>
                <span className="spanList">Education</span>
              </Link>
            </li>
            <li className="link">
              <Link to="projects" smooth={true} duration={500} className="listItems">
                <i className="fa-solid fa-file-code"></i>
                <span className="spanList">Projects</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="side-footer" id="footerSpan">
          <div className="social-icons">
            <h3>Social Icons</h3>
            <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/dev.roshitha/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/dev-roshitha" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="mailto:sajithoshitha98@gmail.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
          </div>
            <div className="call-box">
              <a href="tel:+94703639744"><i className="fa-solid fa-phone"></i> +94 70 36 39 744</a>
            </div>
            <p className="footer-text">Copyrights 2022 | Dev Roshitha</p>
        </div>
      </div>
  </>)
}

export default Navbar