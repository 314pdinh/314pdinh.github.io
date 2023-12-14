import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/img/profilePic.jpg';
import './About-Me.css';

const AboutMe = () => {
    const [text, setText] = useState('');
    const history = useNavigate();

    const navigateToContacts = () => {
        history('/contacts');
    };

    return (
        <section className="about-me" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About Me</span>
                        <p>Passionate and driven software developer with a strong desire to explore and push the boundaries of my abilities. Graduated from App Academy and proficient in JavaScript, HTML, CSS, Express.js, Sequelize, Flask, Postgres, and NodeJS. Constantly seeking new challenges and opportunities to learn and grow.</p>
                        <button onClick={() => console.log('resums')}>Official Resume</button>
                        <button onClick={navigateToContacts}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profilePic} alt="Header img" />
                    </Col>
                </Row>

                <Row>
                    <div className="skill-box">
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