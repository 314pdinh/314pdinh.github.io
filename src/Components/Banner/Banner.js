import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import './Banner.css';

const Banner = () => {
    const [text, setText] = useState('');

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Peter`} <span className="wrap">{text}</span></h1>
                        <p>something something something something something something something something something something something something something something something something something</p>
                        <button onClick={() => console.log('connect')}>Let's Connect  </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={''} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;