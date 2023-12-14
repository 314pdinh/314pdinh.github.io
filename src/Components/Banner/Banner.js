import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import './Banner.css';
import profilePic from '../../assets/img/profilePic.jpg';

const Banner = () => {
    const [text, setText] = useState('');

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Peter,`} <span className="wrap">{text}</span></h1>
                        <p>Your friendly neighborhood developer and software engineer. With a passion for solving complex problems with elegant solutions drives my curiosity and determination as I navigate the ever-expanding world of coding. From solving algorithmic problems to designing seamless user experiences, I thrive on the challenges of engineering software.</p>

                        {/* <button onClick={() => console.log('connect')}>Let's Connect</button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profilePic} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;