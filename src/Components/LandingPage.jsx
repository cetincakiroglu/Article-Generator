import React,{useState, useRef} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'

function LandingPage() {

  const [formInput,setFormInput] = useState([]);
 

  const userInput = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const keyword = userInput.current.value;
    console.log(keyword);

    setFormInput([...formInput, keyword])
    }
 
    return (
      <>
        <Col>
          <Form id="form" onSubmit={handleSubmit} className="d-flex flex-column justify-content-around align-items-center">
            <Form.Group controlId="formBasicEmail" className="input-field">
              <Form.Label>What do you want to write about ?</Form.Label>
              <Form.Control
               type="text"
               ref={userInput} 
               placeholder="'Meditation and it's benefits'" 
               className="rounded-pill" />
            </Form.Group>
             <button className="button submit-btn">Generate Article</button>
          </Form>
        </Col>
        <Articles
        formInput = {formInput}
        />
      </>
    )
}

export default LandingPage
