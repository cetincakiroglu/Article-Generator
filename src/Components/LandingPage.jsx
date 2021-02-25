import React,{useState, useRef, useEffect} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'
import dummyData from '../Data/dummyData';
import { useHistory, useLocation } from 'react-router-dom'

function LandingPage() {

const [formInput,setFormInput] = useState([]);
const [matchedArticle,setMatchedArticle] = useState([]);

//bu id yi diğer componentta kullanacağız
const [id, setid] = useState(-1);
const userInput = useRef();
//burada formdaki inputtan anahtar kelimeyi alıyoruz
const handleSubmit = (e) =>{
  e.preventDefault();
    const keyword = userInput.current.value;
  console.log('keyword',keyword);
  setFormInput([...formInput, keyword])
  searchArticles(keyword);
  // showBtn(); görmezden gel
  }

  //Data klasöründeki dummyData'yı kullanıyorum. Orada arama yapıp benzeyen paragrafları getiriyor.
const searchArticles = (str) =>{
  if(str == false){//string check
    alert('please enter a valid keyword')
  }else{
      let newArticle = dummyData.filter(item => item
        .includes(str.split(' ')[0].toLowerCase() || str.split(' ')[1].toLowerCase()));
        
      setMatchedArticle([...matchedArticle,newArticle]);
      console.log(matchedArticle);
    }
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
               placeholder="Please Enter Keyword" 
               className="rounded-pill" />
            </Form.Group>
             <button className="button submit-btn">
               Generate Article
               </button>
          </Form>
        </Col>
        <Articles
        formInput = {formInput}
        matchedArticle = {matchedArticle}
        setMatchedArticle = {setMatchedArticle}
        setid = {setid}
        />
      </>
    )
}

export default LandingPage
