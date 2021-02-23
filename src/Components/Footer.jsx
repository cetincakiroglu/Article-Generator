import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Row, Col, Card} from "react-bootstrap";
import {FaGithub,FaLinkedin} from "react-icons/fa";

function Footer(){
    return (
        <>
           
                <div className="container-fluid">
                    <Row className="mt-5 pt-3 pb-3 d-flex" id="footer">
            
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
                    </Row>

                </div>
         

        </>
    );
}
export default Footer;