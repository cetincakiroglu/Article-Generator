import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Tutorial() {
    return (
        <>
        <Row className="mt-5">
            <h2>How It Works?</h2>
        </Row>
        <Row className="mt-5 d-flex">
            <Col md={12} className="mb-5 mt-5 text-center">
                <h4>Using the Article Generator is even easier than you think. Our text generator is made to save time by using it easily for all people, regardless of age. </h4>
            </Col>
            <Col md={6} className="mt-5 mb-5">
                <h2>Step 1</h2>
                <h5>
               Enter a keyword or phrase about the topic you want to write in the search bar. 
                </h5>
            </Col>
            <Col md={6} className="mt-5 mb-5">
                <h2>Step 2</h2>
                <h5>
                    Article Generator, searches web to bring you the best content available. After entering your keyword, it brings out carefully selected paragraphs for the subject you want to write. 
                </h5>
            </Col>
            <Col md={6} className="mt-5">
                <h2>Step 3</h2>
                <h5>
                You can select the ones you like among the results by clicking on them. Article Generator will create a text with these paragraphs of your choice. 
                </h5>
            </Col>
            <Col md={6} className="mt-5 mb-5">
                <h2>Step 4</h2>
                <h5>
                After the selection process is completed, you can proceed to the editing stage of the text created for you by pressing the 'continue' button. 
                </h5>
            </Col>
            <Col md={6} className="mt-5 mb-5">
                <h2>Step 5</h2>
                <h5>
                After editing, you can save the text you created by clicking the save button. Even if you refresh the page, the text you create will always be in place. 
                </h5>
            </Col>
        </Row>
        
        </>
    )
}

export default Tutorial
