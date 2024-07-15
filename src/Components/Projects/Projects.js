import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import demoImg from '../../assets/img/404image.jpeg';
import project1 from '../../assets/img/project1.png'
import project2 from '../../assets/img/project2.png'
import project3 from '../../assets/img/project3.png'

import ProjectCards from './ProjectCards';
import './Projects.css';

const Projects = () => {

    const projects = [
        {
            title: <a href="https://air-bnb-i3g8.onrender.com" className="project-link">GlobeHut (AirBnB Clone)</a>,
            // description: <a href="https://air-bnb-i3g8.onrender.com" className="project-link">https://air-bnb-i3g8.onrender.com</a>,
            imgUrl: project1,
        },
        {
            title: <a href="https://parmazon-prime.onrender.com" className="project-link">ParmazonPrime (Amazon Clone)</a>,
            // description: <a href="https://parmazon-prime.onrender.com" className="project-link">https://parmazon-prime.onrender.com</a>,
            imgUrl: project2,
        },
        {
            title: <a href="https://couchmeoutside.onrender.com" className="project-link">CouchMeOutside</a>,
            // description: <a href="https://couchmeoutside.onrender.com" className="project-link">https://couchmeoutside.onrender.com</a>,
            imgUrl: project3,
        },

    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        {/* <p>Showcase of projects</p> */}
                        <br></br>

                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>

                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>


                            </Tab.Content>

                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;