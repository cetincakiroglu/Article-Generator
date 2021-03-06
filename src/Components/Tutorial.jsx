import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import ScrollArrow from './ScrollArrow'

import LandingPageEdit from '../Images/LandingPageEdit.png'
import SelectArticles from '../Images/SelectArticles.png'
import Searchbox from '../Images/Searchbox.png'
import SavedArticlesEdit from '../Images/SavedArticlesEdit.png'
import SavedArticlesBtn from '../Images/SavedArticlesBtn.png'
import SavedArticles from '../Images/SavedArticles.png'
import LandingPageEdit2 from '../Images/LandingPageEdit2.png'

function Tutorial() {
    return (
        <>
        <Container>
       <Row className="my-5">
            <h2 className="green pl-3">How It Works?</h2>
        </Row>
        <Row className="mt-5 d-flex content">
            <Col md={12} className="mb-5 mt-5 text-center">
                <h4>Using the Article Generator is even easier than you think. Our content generator is made to save time by using it easily for all people, regardless of age. </h4>
            </Col>
            <Row className="d-flex justify-content-between mt-5">

            <Col md={6} className="mt-5 mb-5 text-md-right">
                <h2  className="green heading">Step 1</h2>
                <p className="text-justify">
                Enter a <span className="green">keyword</span> or <span className="green">phrase</span> about the topic you want to write to the input box.
                </p>
            </Col>
            <Col md={6}>
                <Image src={Searchbox} fluid className="mt-5 mb-5"/>
            </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-5">
            <Col md={6} xs={{order : 2}} md={{order : 1}}>
            <Image src={SelectArticles} fluid className="mt-5 mb-5"/>
            </Col>
            <Col md={6} className="mt-5 mb-5" xs={{order : 1}} md={{order : 2}}>
                <h2  className="green heading">Step 2</h2>
                <p className="text-justify">
                    After pressing the <span className="green">Generate</span> button, <span className="green">Article Generator</span> immediately scans web to bring you the best content available. After entering your keyword, it brings out carefully selected paragraphs for the subject you want to write about. You can <span className="green">select</span> or <span className="green">deselect</span> the ones you like among the results by clicking on them. Article Generator will create an article with these paragraphs of your choice. 
                </p>
            </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-5">
            <Col md={6} className="mt-5 text-md-right">
                <h2  className="green heading">Step 3</h2>
                <p className="text-justify">
                <span className="green">Pre-edit</span> selected paragraphs as you wish, right below the page without any limiting.
                </p>
            </Col>
            <Col md={6}>
            <Image src={LandingPageEdit} fluid className="mt-5 mb-5"/>
            </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-5">
            <Col md={6}  xs={{order : 2}} md={{order : 1}}>
                <Image src={LandingPageEdit2} fluid className="mt-5 mb-5"/>
            </Col>
            <Col md={6} className="mt-5 mb-5" xs={{order : 1}} md={{order : 2}}>
                <h2  className="green heading">Step 4</h2>
                <p className="text-justify">
                Hit the <span className="green">Save</span> button. Your article will be saved instantly afterwards.
                </p>
            </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-5">

            <Col md={6} className="mt-5 mb-5 text-md-right">
                <h2 className="green heading">Step 5</h2>
                <p className="text-justify">
                Your article will be waiting for further processes in <span className="green">Saved Articles</span> section.
                You can <span className="green">Edit</span>, <span className="green">Update</span> or <span className="green">Delete</span> your articles in here. You don't need to worry about refreshing or closing the page. <span className="green">Your articles will be waiting for you</span>.
                </p>
            </Col>
            <Col md={6}>
            <Image src={SavedArticles} fluid className="mt-5 mb-5"/>
            </Col>
            </Row>
            <ScrollArrow />
        </Row>
            </Container>
        
        </>
    )
}

export default Tutorial
