import React, { useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import eduImg from "../../img/edu.png";
import eduAccordion from "./eduList";
//import gsap from "gsap"

const Education = () => {

    useEffect(() => {
      document.title = "Education | Dev Roshitha"
    }, [])

    return (
        <section className="education-section" id="education">
            <div className="top-wrapper">
              <div className="contentTitle titleHead">
                  <hr className="title-line"/>
                  <h2 className="light-heading"><span>Educational </span>Qualifications</h2>
              </div>
            </div>

            <div className="accordion-wrapper">
                <div className="edu-img-section">
                    <img src={eduImg} alt="roshitha ranasinghe" />
                </div>

                <div className="edu-content-section">
                {eduAccordion.map((values)=>{
                        return(
                            <Accordion className="Accordion">
                                <AccordionSummary 
                                    expandIcon={<ExpandMoreIcon className="ExpandMoreIcon"/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="AccordionSummary"
                            >
                                <Typography  className="Typography heading">{values.heading}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="AccordionDetails">
                                        <Typography className="Typography"> {values.content} </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                </div>
            </div>
        </section>
    );
}

export default Education