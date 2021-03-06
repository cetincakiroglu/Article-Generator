import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Row, Col, Card, Container} from "react-bootstrap";
import {FaGithub,FaLinkedin} from "react-icons/fa";

function Footer(){
    return (
        <>

        <Container className="mt-5 mr-0 ml-0 p-2 g-0 d-flex align-self-end" id="footer" fluid>
        <p style={{fontSize:'12px'}}>Made with <span className="green">❤</span> by our dev team</p>
            <Col className="our-information text-center">
                <h6 className="green">Mustafa Koşmaz</h6>
                <Card.Link href="https://www.linkedin.com/in/neverrun/"><FaLinkedin className="icons"/></Card.Link>
                <Card.Link href="https://github.com/01mk027"><FaGithub className="icons"/></Card.Link>
            </Col>
            <Col className="our-information text-center">
                <h6 className="green">Çetin Çakıroğlu</h6>
            <Card.Link href="https://www.linkedin.com/in/cakiroglu-cetin/"><FaLinkedin className="icons"/></Card.Link>
            <Card.Link href="https://github.com/cetincakiroglu"><FaGithub className="icons"/></Card.Link>
            </Col>
            <Col className="our-information text-center">
                <h6 className="green">Saliha Şahin</h6>
            <Card.Link href="https://www.linkedin.com/in/saliha-%C5%9Fahin-45651a19a/"><FaLinkedin className="icons"/></Card.Link>
            <Card.Link href="https://github.com/SalihaSahin"><FaGithub className="icons"/></Card.Link>
            </Col>
        </Container>

        </>
    );
}
export default Footer;