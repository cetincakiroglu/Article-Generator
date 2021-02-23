import React from 'react'
import{Col, Row, Container, Card} from 'react-bootstrap'
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Contact() {
    return (
        <>
        <Container>
            <Row >
                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title><b>Saliha Şahin</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">saliha_sahin_01@hotmail.com</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link className="link" href="https://www.linkedin.com/in/saliha-%C5%9Fahin-45651a19a/"><FaLinkedin className="linkedin"/>Linkedin</Card.Link>
                            <Card.Link className="link" href="https://github.com/SalihaSahin"><FaGithub className="github"/>Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title><b>Mustafa Koşmaz</b></Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link className="link" href="https://www.linkedin.com/in/neverrun/"><FaLinkedin className="linkedin"/>Linkedin</Card.Link>
                            <Card.Link className="link" href="https://github.com/01mk027"><FaGithub className="github"/>Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card className="info-card">
                        <Card.Body>
                            <Card.Title><b>Çetin Çakıroğlu</b></Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link className="link" href="https://www.linkedin.com/in/cakiroglu-cetin/"><FaLinkedin className="linkedin"/>Linkedin</Card.Link>
                            <Card.Link className="link" href="https://github.com/cetincakiroglu"><FaGithub className="github"/>Github</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Contact
