import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import './Navigation.css';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* React-Bootstrap */}
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/about-me"
                            className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('about-me')}>
                            About Me
                        </Nav.Link>
                        <Nav.Link href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="/resume"
                            className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('resume')}>
                            Resume
                        </Nav.Link>
                    </Nav>
                    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/peter-dinh-5a22a01b3/"><img src={''} alt="Logo" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;