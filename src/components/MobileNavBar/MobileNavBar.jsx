import React from "react"
//import { NavLink } from "react-router-dom"

const MobileNavBar = () => {
  return(
    <section className="mobileMenuWrapper">
      <div className="mobileNav">
        <div className="menuItemWrapper">
          <a href="#home" className="listItem">
            <i className="fa-solid fa-house"></i><br/>
            <span className="spanListMobile">Home</span>
          </a>
          <a href="#about" className="listItem">
            <i className="fa-solid fa-circle-info"></i><br/>
            <span className="spanListMobile">About</span>
          </a>
          <a href="#education" className="listItem">
            <i className="fa-solid fa-graduation-cap"></i><br/>
            <span className="spanListMobile">Education</span>
          </a>
          <a href="#projects" className="listItem">
            <i className="fa-solid fa-file-code"></i><br/>
            <span className="spanListMobile">Projects</span>
          </a>
        </div>
      </div>

      <div className="diver">
        <hr/>
      </div>

      <div className="menuContact">
        <div className="socialIcons">
          <li><a href="https://www.linkedin.com/in/roshitha-ranasinghe/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://www.instagram.com/dev.roshitha/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/RoshithaRana" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://wa.me/+94703639744" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="https://github.com/dev-roshitha" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="mailto:sajithroshitha98@gmail.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
        </div>

        <div className="contactSection">
          <div className="call-box">
            <a href="tel:+94703639744"><i className="fa-solid fa-phone"></i> +94 70 36 39 744</a>
          </div>
        </div>
      </div>
    </section>
  )}

export default MobileNavBar;