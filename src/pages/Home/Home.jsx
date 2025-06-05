import React, { useEffect } from "react";
import gsap from "gsap"
import IMG01 from '../../img/img-01.webp'
import IMG02 from '../../img/img-02.webp'
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Home = () => {

  useEffect(() => {
    document.title = "Portfolio | Dev Roshitha"


    
  }, [])

  const [typingText] = useTypewriter({
    words: ["Frontend Developer", "Who Hunger In Javascript", "And Loves Coffe ❤️️☕️"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 20
  })

  useEffect(() => {

    gsap.from(".first-img", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "bounce"
    })

    gsap.from(".second-img", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "bounce"
    })

    let str = "roshitha ranasinghe - frontend developer -"
    let text = document.getElementById('circle')
    for(let i = 0; i < str.length; i++){
      let spanTag = document.createElement("span")
      spanTag.innerHTML = str[i]
      text.appendChild(spanTag)
      spanTag.style.transform = `rotate(${8.5*i}deg)`
    }

  }, [])


    return (
      <section className="main-wrapper" id="home">
        <div className="image-text-container">
              <p className="cText" id="circle"></p>
          <div className="image-wrapper">
            <div className="image-inner-wrp">
              <img className="first-img" src={IMG01} alt="Roshitha Ranasinghe" fetchpriority="high"/>
              <img className="second-img" src={IMG02} alt="Roshitha Ranasinghe" fetchpriority="high"/>
              <span className="title first">roshitha</span><br/>
              <span className="title second">ranasinghe</span>
            </div>
          </div>
          <div className="text-wrapper">
            <span>{typingText}</span>
            <Cursor cursorColor='#00ffff'/>
          </div>
        </div>
        <div className="text-container">
          <div className="details-wrapper">
          <hr className="title-line"/>
                <h2 className="light-heading">About <span className="style-word">Me</span></h2>
                <div className="description">
                  <p>Hi, I'm Roshitha Ranasinghe
                    I'm a passionate Frontend Developer with a strong academic background and a love for creating modern, responsive web applications. I hold a Bachelor of Information Technology (Hons) from Lincoln University and a Higher Diploma in Computer Science from Infortec International Asia Campus (IIAC).
                  </p>
                  <p>
                    My interests lie in web application development using the latest technologies like ReactJS, NodeJS, MongoDB, and Bootstrap. I'm always eager to learn, adapt quickly to new tools and trends, and bring software engineering principles to every project I build.
                  </p>
                  <p>
                    Looking ahead, I aspire to grow into a mobile application developer and continue working with cutting-edge technologies that push the boundaries of user experience and performance.
                  </p>
                </div>
          </div>
        </div>
      </section>
  );
}

export default Home;