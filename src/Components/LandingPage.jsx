import React,{useState, useRef} from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Articles from './Articles'


function LandingPage() {

  const [formInput,setFormInput] = useState([]);
  
 //dummy data
 const dummyArticle = [

  "Bitcoin is the hottest thing in the world of money today. It's a virtual currency that has captured the attention of so many people who are very interested to know more about it. It's basically a new way of acquiring money with no central authority. No country or financial institution acts as a middleman in this process which makes this currency secure and easy to use. All you need to do is store your Bitcoins on your computer and generate them using software with a process called 'mining'. ",
  "Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health. And these benefits don't end when your meditation session ends. Meditation can help carry you more calmly through your day and may help you manage symptoms of certain medical conditions."
];

  const userInput = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const keyword = userInput.current.value;
    console.log('keyword',keyword);

    setFormInput([...formInput, keyword])
    searchArticles(keyword);
    }

    const [matchedArticle, setMatchedArticle] = useState([]);

    const searchArticles = (str) =>{
      //TODO: Revise that function
      let newArticle = dummyArticle.map(item => item)
        .filter(item => item
        .includes(str.split(' ')[0].toLowerCase() || str.split(' ')[1].toLowerCase()));
      //TODO: Revise that function
     console.log(newArticle)
      // newArticle = newArticle[0].paragraph;
      setMatchedArticle([newArticle]);
      console.log(matchedArticle);
    }

    const saveEdit = (obj) =>{
      const editedArticle = obj.article;
      
      setMatchedArticle([editedArticle]);
      console.log('edited version',matchedArticle);
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
        matchedArticle = {matchedArticle}
        setMatchedArticle = {setMatchedArticle}
        saveEdit = {saveEdit}
        />
      </>
    )
}

export default LandingPage