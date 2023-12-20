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

    const navigateToResume = () => {
        window.location.href = 'https://docs.google.com/document/d/1qrargzv1UCjZAVT0EIExQNPXM9ysqFKRDF-cZZOeNMc/edit?usp=sharing';
    };

    return (
        <section className="about-me" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About Me</span>
                        <p>I am a software engineer with an educational background in Biology. My work experience was primarily in the healthcare sector. My interest in coding sparked when I encountered complex puzzles and created a simple website with HTML and CSS Which led me to discover a passion for simplifying and planning through coding. In the course of my ongoing learning journey, where I've explored various languages and frameworks, I've successfully coded full-stack applications. The challenges encountered along the way have shaped my skills and abilities to code better. Every day, I commit to expanding my knowledge and continuously seek ways to enhance my projects.</p>
                        <button onClick={navigateToResume}>Official Resume</button>
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
                            <br></br>
                        </p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe;