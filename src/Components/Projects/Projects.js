import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import demoImg from '../../assets/img/404image.jpeg';
import ProjectCards from './ProjectCards';
import './Projects.css';

const Projects = () => {

    const projects = [
        {
            title: "GlobeHut (AirBnB Clone)",
            description: "description 1",
            imgUrl: demoImg,
        },
        {
            title: "ParmazonPrime (Amazon Clone)",
            description: "description 2",
            imgUrl: demoImg,
        },
        {
            title: "CouchMeOutside",
            description: "description 3",
            imgUrl: demoImg,
        },

    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Something somethiaogjoag agha0j a-yudi da</p>

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