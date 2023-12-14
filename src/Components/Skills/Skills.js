import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import './Skills.css';

const Skills = () => {

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>
                                something something something something something
                                <br></br>here here herehere goes. FUN!
                            </p>

                            <p align="left" className="icon-list">
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" />
                                </a>

                                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" />
                                </a>

                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" />
                                </a>

                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
                                </a>

                                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />
                                </a>
                                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" />
                                </a>
                                <a href="https://postman.com" target="_blank" rel="noreferrer">
                                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" />
                                </a>
                                <a href="https://www.python.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" />
                                </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
                                </a>
                                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" />
                                </a>
                                <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
                                    <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" />
                                </a>
                                
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Skills;