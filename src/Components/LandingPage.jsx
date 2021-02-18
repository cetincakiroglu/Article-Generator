import React,{useState, useRef} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'


function LandingPage() {
  
 //dummy data
 const dummyArticle = [

  "Bitcoin is the hottest thing in the world of money today. It's a virtual currency that has captured the attention of so many people who are very interested to know more about it. It's basically a new way of acquiring money with no central authority. No country or financial institution acts as a middleman in this process which makes this currency secure and easy to use. All you need to do is store your Bitcoins on your computer and generate them using software with a process called 'mining'. ",
  "Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health. And these benefits don't end when your meditation session ends. Meditation can help carry you more calmly through your day and may help you manage symptoms of certain medical conditions."
];

const [formInput,setFormInput] = useState([]);

const [matchedArticle, setMatchedArticle] = useState([]);
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
      let newArticle = dummyArticle.map(item => item)
        .filter(item => item
        .includes(str.split(' ')[0].toLowerCase() || str.split(' ')[1].toLowerCase()));

      setMatchedArticle([...matchedArticle, newArticle]);
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
    
    sessionStorage.setItem('article', JSON.stringify(article));
    console.log(typeof article)
    
  }
  const getStoredArticle = () =>{
    let storedArticle = JSON.parse(sessionStorage.getItem('article'));
    if(storedArticle !== [[]] && storedArticle !== null) setMatchedArticle([...storedArticle]);

    console.log('local storage',storedArticle);
  }
  //refactor this
  window.addEventListener('load',()=>{
    getStoredArticle();
  })
  //refactor this

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
        matchedArticle = {matchedArticle}
        setMatchedArticle = {setMatchedArticle}
        saveEdit = {saveEdit}
        setid = {setid}
        />
      </>
    )
}

export default LandingPage
