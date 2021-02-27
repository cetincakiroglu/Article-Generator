import React,{useState, useRef, useEffect} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'
import dummyData from '../Data/dummyData';
import { useHistory, useLocation, Link } from 'react-router-dom'
import ScrollArrow from './ScrollArrow'

function LandingPage() {
//VALUES STATE'INI BURADA BELIRLE, VALUES'U TEKRAR ARAMA YAPTIĞINDA SIFIRLAMAN LAZIM.
const [values,setValues] = useState([]);
const [formInput,setFormInput] = useState([]);

//bu state ile eşleşen makaleler gidiyor, bu state'i güncelle
const [matchedArticle,setMatchedArticle] = useState([]);


//bu id yi diğer componentta kullanacağız
const [id, setid] = useState(-1);
const userInput = useRef();
const history = useHistory();
//burada formdaki inputtan anahtar kelimeyi alıyoruz

const handleSubmit = (e) =>{
  e.preventDefault();
    const keyword = userInput.current.value;
    console.log('keyword',keyword);
    setFormInput([...formInput, keyword])
    searchArticles(keyword);
    //fetch yaparsan searchArticles'ı commitle, dummyData'dan veri çekiyor.
  
  }


const resetValues = ()=>{
  let array = values;
  if(array[0]){
    setValues(array.splice(0,-1))
  }
}
  //Data klasöründeki dummyData'yı kullanıyorum. Orada arama yapıp benzeyen paragrafları getiriyor.
const searchArticles = (str) =>{
  if(str == false){//string check
    alert('please enter a valid keyword')
  }else{

    
      let newArticle = dummyData.filter(item => item
        .includes(str.split(' ')[0].toLowerCase() || str.split(' ')[1].toLowerCase()));
        
      setMatchedArticle([...newArticle]);//state güncelleme
      console.log('MATCHED ARTICLE', matchedArticle);
   
    }
  }

  
    return (
      <>
      <Row >
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
         
        </Col>
      </Row>
      <Row className="d-flex flex-column">

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
