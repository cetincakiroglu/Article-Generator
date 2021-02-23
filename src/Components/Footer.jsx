import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Row, Col, Card} from "react-bootstrap";
import {FaGithub,FaLinkedin} from "react-icons/fa";

function Footer(){
    return (
        <>
            <div className="footer ">
                <div className="container">
                    <Row>

                        <Col className="mt-3">
                            <ListGroup variant="flush" className="   footer-categories ">
                        <ListGroup.Item className="f-option"><h3>Category</h3></ListGroup.Item>
                        <ListGroup.Item className="f-option">-Home</ListGroup.Item>
                        <ListGroup.Item className="f-option">-About</ListGroup.Item>
                        <ListGroup.Item className="f-option">-Contact</ListGroup.Item>
                    </ListGroup>

                    </Col>

                        <Col className="our-information">

                            <p>Mustafa Koşmaz</p>
                            <Card.Link href="https://www.linkedin.com/in/neverrun/"><FaLinkedin/></Card.Link>
                            <Card.Link href="https://github.com/01mk027"><FaGithub/></Card.Link>
                        </Col>
                    <Col className="our-information">
                            <p>Çetin Çakıroğlu</p>
                        <Card.Link href="https://www.linkedin.com/in/cakiroglu-cetin/"><FaLinkedin/></Card.Link>
                        <Card.Link href="https://github.com/cetincakiroglu"><FaGithub/></Card.Link>
                    </Col>
                    <Col className="our-information">
                            <p>Saliha Şahin</p>
                        <Card.Link href="https://www.linkedin.com/in/saliha-%C5%9Fahin-45651a19a/"><FaLinkedin/></Card.Link>
                        <Card.Link href="https://github.com/SalihaSahin"><FaGithub/></Card.Link>

                    </Col>
                    </Row>

                </div>
            </div>

        </>
    );
}
export default Footer;