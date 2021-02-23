import React,{useState, useRef, useEffect, useContext } from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'
import dummyData from '../Data/dummyData';
import {Link} from 'react-router-dom'

function LandingPage() {

const [formInput,setFormInput] = useState([]);
const [matchedArticle,setMatchedArticle] = useState([]);


const [id, setid] = useState(-1);
const userInput = useRef();

const handleSubmit = (e) =>{
  e.preventDefault();

  const keyword = userInput.current.value;
  console.log('keyword',keyword);

  setFormInput([...formInput, keyword])
  searchArticles(keyword);
  }

const searchArticles = (str) =>{
  if(str == false){
    alert('please enter a valid keyword')
  }else{
      let newArticle = dummyData.map(item => item)
        .filter(item => item
        .includes(str.split(' ')[0].toLowerCase() || str.split(' ')[1].toLowerCase()));

      setMatchedArticle([...matchedArticle,newArticle]);
    }
    //[...matchedArticle,newArticle] --> gives multiple articles, you need to fix edit by using article id's;
    //setMatchedArticle(newArticle) --->gives single result
  }
  
  const saveEdit = (obj) =>{
    const text = obj.article;
    // setMatchedArticle([editedArticle]);
    let article = [...matchedArticle];
    article[id] = [text]
    setMatchedArticle(article);
    setid(-1);
    
  //   sessionStorage.setItem('article', JSON.stringify(article));
  // console.log(typeof article)
    
  }
  // const getStoredArticle = () =>{
  //   let storedArticle = JSON.parse(sessionStorage.getItem('article'));
  //   if(storedArticle !== [[]] && storedArticle !== null) setMatchedArticle([...storedArticle]);
  // }
 
  // useEffect (()=>{
  //   getStoredArticle();
  // },[])

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
             <button className="button submit-btn">
               Generate Article
               </button>
          </Form>
        </Col>
        <Articles
        formInput = {formInput}
        matchedArticle = {matchedArticle}
        setMatchedArticle = {setMatchedArticle}
        saveEdit = {saveEdit}
        setid = {setid}
        />
      </>
    )
}

export default LandingPage
