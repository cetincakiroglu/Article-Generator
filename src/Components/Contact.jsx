import React from 'react'
import{Col, Row, Container, Card} from 'react-bootstrap'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom'

function Contact() {
    return (
        <>
        <Container>
        <Row className="my-5">
            <h2 className="green pl-3">Contact</h2>
        </Row>
            <Row id="contact">
                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title className="text-center mb-5"><b>Saliha Şahin</b></Card.Title>
                            <Card.Text className="text-center">
                            Frontend Developer, her main focus in the project is to establish frontend applications and maintain them. 
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4 pt-5">
                            <Card.Link className="link" href="https://www.linkedin.com/in/saliha-%C5%9Fahin-45651a19a/"><FaLinkedin className="icons"/></Card.Link>
                            <Card.Link className="link" href="https://github.com/SalihaSahin"><FaGithub className="icons"/></Card.Link>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title className="text-center mb-5"><b>Mustafa Koşmaz</b></Card.Title>

                            <Card.Text className="text-center">
                            Backend Developer, his main focus in the project is to establish backend applications and communication with the front end. 
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4 pt-5">
                            <Card.Link className="link" href="https://www.linkedin.com/in/neverrun/"><FaLinkedin className="icons"/></Card.Link>
                            <Card.Link className="link" href="https://github.com/01mk027"><FaGithub className="icons"/></Card.Link>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title className="text-center"><b>Çetin Çakıroğlu</b></Card.Title>

                            <Card.Text className="text-center mt-5">
                            Frontend Developer, his main focus in the project is to create UX, establish frontend applications and maintain them.
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4 pt-5">
                            <Card.Link className="link" href="https://www.linkedin.com/in/cakiroglu-cetin/" ><FaLinkedin  className="icons"/></Card.Link>
                            <Card.Link className="link" href="https://github.com/cetincakiroglu"><FaGithub className="icons"/></Card.Link>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Contact
