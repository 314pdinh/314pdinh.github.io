import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import './About-Me.css';

const AboutMe = () => {
    const [text, setText] = useState('');

    return (
        <section className="about-me" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About Me</span>
                        <p>Passionate and driven  junior software developer with a strong desire to explore and push the boundaries of my abilities. Graduated from app academy and proficient in JavaScript, HTML5, CSS3, Express.js, Sequelize, Flask, Postgres, and NodeJS. Constantly seeking new challenges and opportunities to learn and grow.</p>
                        <button onClick={() => console.log('resums')}>Official Resume</button>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={''} alt="Header img" />
                    </Col>
                </Row>

                <Row>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>
                            something something something something something
                            <br></br>here here herehere goes. FUN!
                        </p>
                        <h2>Location</h2>
                        <p>
                            Philadelphia, Pennsylvania
                            <br></br>here here herehere goes. FUN!
                        </p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe;