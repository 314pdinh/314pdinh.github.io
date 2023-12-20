import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import memoji from '../../assets/img/memoji.png'
import './Contacts.css';
const Contacts = () => {

    const navigateToResume = () => {
        window.location.href = 'https://docs.google.com/document/d/1qrargzv1UCjZAVT0EIExQNPXM9ysqFKRDF-cZZOeNMc/edit?usp=sharing';
    };

    return (
        <section className="contact">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={memoji} alt='Contact Us'></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <div>
                            <Row>
                                <>
                                    <h2>
                                        Email
                                    </h2>

                                    <h3>
                                        314pdinh@gmail.com
                                    </h3>
                                </>

                                <>
                                    <h2>
                                        Socials
                                    </h2>
                                </>

                                <>
                                    <h3>
                                        <a href="https://www.linkedin.com/in/peter-dinh-5a22a01b3/">Linkedin</a>
                                    </h3>
                                </>

                                <>
                                    <h3>
                                        <a href="https://github.com/314pdinh">Github</a>
                                    </h3>
                                </>

                                <button onClick={navigateToResume}>Official Resume</button>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contacts;