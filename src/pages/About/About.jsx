import React, { useEffect } from "react";
import webDesign from "../../img/design.png"
import webDeveloping from "../../img/developing.png"
//import gsap from "gsap"
//import ScrollTrigger from "gsap/src/ScrollTrigger"

const About  = () => {

    useEffect(() => { 
      document.title = "About | Dev Roshitha"
    }, [])

    // gsap.registerPlugin(ScrollTrigger)
    // useEffect(() => {
    // }, [])

    return(<section className="about-section" id="about">
            <div className="contentTitle titleHead about-wrapper">
                <hr className="title-line"/>
                <h2 className="light-heading">I'm <span className="style-word">flexible</span> with these</h2>
            </div>

        <div className="aboutBoxWrapper about-wrapper">
            <div className="about-box about-left-box">
                <img src={webDesign} alt="about-description" />
                <h3>web design & development</h3>
                <p>Design very unique and striking latest UX/UI technologies. And i can create amazing website for your business with having beautiful user friendly interfaces.</p>
            </div>
            <div className="about-box about-right-box">
                <img src={webDeveloping} alt="about-description" />
                <h3>web application development</h3>
                <p>Design and develop fully Integrated web based application for in your organization with using cutting-edge technologies.</p>
            </div>
        </div>

            <div className="contentTitle titleHead">
                <hr className="title-line"/>
                <h2 className="light-heading"><span className="style-word">Work</span> Experience</h2>
            </div>

        <div className="work-ex-wrapper">
            <div className="timeline">
                <div className="container left-container">
                    <div className="text-box left-box">
                        <h3 className="box-title">BrandOcean(Pvt)Ltd</h3>
                        <small className="date">2021 - 2022</small>
                        <p className="description">(01 year) – Have strong experience in WordPress web
                            design and development (including one e-commerce website
                            with Elementor page builder) Designed and developed
                            responsive websites using WordPress and Elementor page
                            builder.
                        </p>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="text-box right-box">
                        <h3 className="box-title">Circlebook(Pvt)Ltd</h3>
                        <small className="date">2022</small>
                        <p className="description">(06-Month) – Successfully completed internship program at
                            circlebook(Pvt)Ltd as a WordPress web developer and react-native frontend developer. During internship I’ve created WordPress websites using elementor and DIVI page builders. And also I’ve created
                            invoice generator mobile app UI using react-native.
                        </p>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="text-box left-box">
                        <h3 className="box-title">Ebeyonds(Pvt)Ltd</h3>
                        <small className="date">2023 - Present</small>
                        <p className="description"> I’ve joined as an associate web developer and gained experience in front-end development with HTML SASS javascript and trained to create reusable components using pure HTML and CSS for their web projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default About