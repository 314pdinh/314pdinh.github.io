import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={''} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <div className="githubs">
                                <a href="https://github.com/314pdinh"><i class="fa-brands fa-github"></i></a>
                            </div>
                            <div className="linkedins">
                                <a href="https://www.linkedin.com/in/peter-dinh-5a22a01b3/"><i className="fa-brands fa-linkedin" style={{ color: "#0047c2" }}></i></a>
                            </div>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;