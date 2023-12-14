import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const history = useNavigate();

    const navigateToContacts = () => {
        history('/contacts');
    };


    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('home')}
                            >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about-me"
                            className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('about-me')}
                            >
                            About Me
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/resume"
                            className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('resume')}
                            >
                            Resume
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <button className="vvd" onClick={navigateToContacts}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;