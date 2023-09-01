import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import colorSharp2 from '../../assets/img/color-sharp2.png';

const Projects = () => {

    const projects = [
        {
            title: "something 1",
            description: "description 1",
        },
        {
            title: "something 2",
            description: "description 2",
        },
        {
            title: "something 3",
            description: "description 3",
        },
        {
            title: "something 4",
            description: "description 4",
        },
        {
            title: "something 5",
            description: "description 5",
        },
        {
            title: "something 6",
            description: "description 6",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Title</h2>
                        <p>Something somethiaogjoag agha0j a-yudi da</p>

                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>

                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>

                      

                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;