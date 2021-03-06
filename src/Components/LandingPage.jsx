import React,{useState, useRef, useEffect} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'
import ScrollArrow from './ScrollArrow'
import Spinner from './Spinner'


function LandingPage() {

const [values,setValues] = useState([]);
const [formInput,setFormInput] = useState([]);
const [showSpinner, setShowSpinner] = useState(0);
const [matchedArticle,setMatchedArticle] = useState([]);
const [id, setid] = useState(-1);

const userInput = useRef();

const handleSubmit = (e) =>{
  e.preventDefault();
  setShowSpinner(1);
  console.log(showSpinner)
    const keyword = userInput.current.value;
    setFormInput([...formInput, keyword])
    getData(keyword)
}

const resetValues = ()=>{
  console.log(showSpinner)
  let array = values;
  if(array[0]){
    setValues(array.splice(0,-1))
  }
} 
const getData = async function (str) {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try{
      fetch(`https://salty-meadow-59254.herokuapp.com/search?q=${str}`, requestOptions)
      .then(response => response.json())
      .then(result => setMatchedArticle(result))
      .then(()=>setShowSpinner(0))
    }
    catch(err){
      console.log(err)
    };
  }
    return (
      <>
      <Container id="landing-page-wrapper">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-around align-items-center mt-5 mb-5">
            <Form.Group controlId="formBasicEmail" id="search-input">
              <Form.Label>What do you want to write about ?</Form.Label>
              <Form.Control
               type="text"
               ref={userInput} 
               placeholder="Please Enter Keyword" 
               className="rounded-pill" />
            </Form.Group>
           <button onClick={resetValues} className="button submit-btn">
               Generate Article
            </button> 
          </Form>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <Spinner showSpinner ={showSpinner}/>

        <Articles
        formInput = {formInput}
        matchedArticle = {matchedArticle}
        setMatchedArticle = {setMatchedArticle}
        setid = {setid}
        values = {values}
        setValues = {setValues}
        />
      <ScrollArrow />
      </Row>
      </Container>
      </>
    )
}

export default LandingPage
