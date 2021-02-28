import React from 'react'
import{Col, Row, Container, Card, Image} from 'react-bootstrap'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom'

import cetincakiroglu from '../Images/cetincakiroglu.jpg'

function Contact() {
    return (
        <>
        <Container>
        <Row className="my-5">
            <h2 className="green pl-3">Contact</h2>
        </Row>
            <Row id="contact">
                <Col >
                    <Card  className="info-card">
                        <Card.Body>
                            <Card.Title className="text-center"><b>Saliha Şahin</b></Card.Title>
                            <hr className="contact-line"/>
                            <Col className="text-center">
                                <img className="devteam" src={cetincakiroglu} />
                            </Col>
                            <hr className="contact-line"/>
                            <Card.Text className="text-center contact-info">
                            Frontend Developer, main focus in the project is to establish frontend applications and maintain them.
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4 ">
                            <Card.Link className="link" href="https://www.linkedin.com/in/saliha-%C5%9Fahin-45651a19a/"><FaLinkedin className="icons"/></Card.Link>
                            <Card.Link className="link" href="https://github.com/SalihaSahin"><FaGithub className="icons"/></Card.Link>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="info-card">
                       
                        <Card.Body >
                            <Card.Title className="text-center"><b>Mustafa Koşmaz</b></Card.Title>
                            <hr className="contact-line"/>
                            <Col className="text-center">
                                <img className="devteam" src={cetincakiroglu} />
                            </Col>
                            <hr className="contact-line"/>
                            <Card.Text className="text-center contact-info">
                            Backend Developer, his main focus in the project is to establish backend applications.
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4">
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
                            <hr className="contact-line"/>
                            <Col className="text-center">
                                <img className="devteam" src={cetincakiroglu} />
                            </Col>
                            <hr className="contact-line"/>
                            <Card.Text className="text-center contact-info">
                            Frontend Developer, his main focus in the project is to create UX, establish frontend applications.
                            </Card.Text>
                            <Col className="d-flex justify-content-around mt-4">
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
