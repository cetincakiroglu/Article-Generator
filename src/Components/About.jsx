import React from 'react'
import {Row,Col} from 'react-bootstrap'

function About() {
    return (
        <>
        <Row className="my-5">
            <h2 className="green pl-3">About Us</h2>
        </Row>
        <Row className="about-text">
            <Col>
            <div className="container">
               <p>
               Article Generator has emerged as a result of this adventure set out with 3 developers, <span className="green">Çetin Çakıroğlu, Saliha Şahin, Mustafa Koşmaz</span> from Kodluyoruz 78.Adana Full Stack Web Development Bootcamp.
                   </p> 
              <p>
              In this period when our time was our biggest competitor,
                we aimed to create an automatic text under the guidance of the requested information,
                using different sources selected by the users and the paragraphs provided from these
                sources.
              </p>
                <p>
                On our site, which offers multiple language options,
                users can create texts from all over the world.
                Besides, the generated text can be edited according to the requests of the users.
                In this way, we create faster, more meaningful, and various texts for users.
                </p>
            </div>
            </Col>
        </Row>

        </>
    )
}

export default About
