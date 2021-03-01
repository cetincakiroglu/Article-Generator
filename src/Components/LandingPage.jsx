import React,{useState, useRef, useEffect} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
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
      fetch(`http://localhost:5000/search?q=${str}`, requestOptions)
      .then(response => response.json())
      .then(result => setMatchedArticle(result))
      .then(()=>setShowSpinner(0))
    }
    // https://protoback-adana.herokuapp.com/search?q=artificial+intelligence
    catch(err){
      console.log(err)
    };
  }
    return (
      <>
      <Row className="mb-5" >
        <Col>
          <Form id="form" onSubmit={handleSubmit} className="d-flex flex-column justify-content-around align-items-center">
            <Form.Group controlId="formBasicEmail" className="input-field">
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
         
        <Spinner showSpinner ={showSpinner}/>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">

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
      </>
    )
}

export default LandingPage
