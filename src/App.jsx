import React from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import MobileNavBar from "./components/MobileNavBar/MobileNavBar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Education from "./pages/Education/Education"
import Projects from "./pages/Projects/Projects"
import { Route, Routes} from "react-router-dom"
//import Snowfall from 'react-snowfall'
import "./sass/main.scss"



function App(){
    console.log("UPDATE")
    return(
        <div className="app-wrapper">
            <div className="app-inner">
                {/* <Snowfall />  */}
                <Header />
                <Navbar />

                <Routes>
                    <Route exact path="/dev.roshitha" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>

                <MobileNavBar />
            </div>
        </div>
    );
}

export default App 