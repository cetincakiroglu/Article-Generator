import React from 'react'
import {Row,Col} from 'react-bootstrap'

function About() {
    return (
        <>
        <Row className="about-text">
            <Col>
            <div className="container">
                <h2 id="about-header">About</h2>
                Article Generator has emerged as a result of this adventure set out with 3 developers from Kodluyoruz 78.Adana Full Stack Web Development Bootcamp.
                <br /><br />
                In this period when our time was our biggest competitor,
                we aimed to create an automatic text under the guidance of the requested information,
                using different sources selected by the users and the paragraphs provided from these
                sources.<br /><br />
                On our site, which offers multiple language options,
                users can create texts from all over the world.
                Besides, the generated text can be edited according to the requests of the users.
                In this way, we create faster, more meaningful, and various texts for users.
            </div>
            </Col>
        </Row>

        </>
    )
}

export default About
