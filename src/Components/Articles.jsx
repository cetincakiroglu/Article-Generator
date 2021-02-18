import React,{useRef, useState} from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function Articles({ saveEdit, formInput , matchedArticle, setid}) {
    // const checkboxInput = useRef();
    // const [input,setInput] = useState([]);

    // const handleSubmit = (e) =>{
    //     const userInput = checkboxInput.current.value;
    //     e.preventDefault();
    //     setInput(userInput);
    //     console.log(input);
    // }


    return (
        <>
            <Row className="gx-0 m-0 p-0 d-flex justify-content-between">
                {/* <Col id="search__results" md={3} className="bg-success">
                    results
                <Form onSubmit={handleSubmit}>
                    <div key='checkbox' className="mb-3">
                        <Form.Check type='text'>
                            <Form.Check.Input isValid />
                            <Form.Check.Label useRef={checkboxInput}>this is a paragraph</Form.Check.Label>
                          
                        </Form.Check>
                    </div>
                    <div key='default-checkbox' className="mb-3">
                        <Form.Check
                        ref={checkboxInput}
                        type='checkbox'
                        id='default-checkbox'
                        label='this is a search result paragrapgs will be displayed in here'
                        />
                    </div>
                    <div key='default-checkbox' className="mb-3">
                        <Form.Check
                        ref={checkboxInput}
                        type='checkbox'
                        id='default-checkbox'
                        label='this is a search result paragrapgs will be displayed in here'
                        />
                    </div>
                    <button type="submit">Show input</button>
                </Form>
                </Col> */}
               
                
                <ArticleCard
                formInput={formInput}
                matchedArticle = {matchedArticle}
                saveEdit = {saveEdit}
                setid = {setid}
                />
         
            </Row>
        </>
    )
}

export default Articles
