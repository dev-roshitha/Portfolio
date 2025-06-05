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
                <p>Hello im Roshitha Ranasinghe and i am a frontend developer. And also im a degree holder in bachelor of information technology(BIT) Hons at Lincoln university and HDCS(Higher Diploma in Computer Science) holder at Infortec International Asia Campus(IIAC) and . Interested in web application development  using latest web technologies and frameworks (ReactJS, NodeJS, Mongodb, Bootstrap) I hope  to be a mobile application developer in my future. Im also passionate about learn new things quickly. build new products by applying software engineering concepts and hunger to work with cutting-edge technologies.</p>
          </div>
        </div>
      </section>
  );
}

export default Home;