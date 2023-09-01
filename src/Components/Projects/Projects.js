import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import colorSharp2 from '../../assets/img/color-sharp2.png';
import demoImg from '../../assets/img/404image.jpeg';
import ProjectCards from './ProjectCards'

const Projects = () => {

    const projects = [
        {
            title: "something 1",
            description: "description 1",
            imgUrl: demoImg,
        },
        {
            title: "something 2",
            description: "description 2",
            imgUrl: demoImg,
        },
        {
            title: "something 3",
            description: "description 3",
            imgUrl: demoImg,
        },
        {
            title: "something 4",
            description: "description 4",
            imgUrl: demoImg,
        },
        {
            title: "something 5",
            description: "description 5",
            imgUrl: demoImg,
        },
        {
            title: "something 6",
            description: "description 6",
            imgUrl: demoImg,
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


                                <Tab.Pane eventKey='second'>Something One</Tab.Pane>
                                <Tab.Pane eventKey='third'>Something Two</Tab.Pane>

                            </Tab.Content>

                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;