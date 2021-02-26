import React, { useState, useRef, useContext } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import alertify from 'alertifyjs'


function ArticleCard({values,setValues}) {
    const [savedArticles, setSavedArticles] = useState([]);
    const [classToggler, setClassToggler] = useState(true);
    const [id,setid] = useState(-1)
    const [showBtn, setShowBtn] = useState(false);
    
    const textArea = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDisplay();
    }
//burada editliyoruz aşağıdan gönderdiğimiz objeyi
    const editArticle = (obj) => {
        textArea.current.value = obj.article;
        console.log('EDIT ARTICLE', obj)
        handleDisplay();
    }

    const saveEdit = (obj) =>{

        const randomID =  Date.now().toString(36) + Math.random().toString(36).substr(2);
        const newInput = {id: randomID, text:obj.article}

        setValues([newInput.text])
        console.log(values)
        let newSavedArticles = [...savedArticles,newInput]
        setSavedArticles(newSavedArticles)
        if(localStorage.getItem('article')){
            let storedItem = JSON.parse(localStorage.getItem('article'));
            newSavedArticles = [...newSavedArticles,...storedItem]
            localStorage.setItem('article', JSON.stringify(newSavedArticles));
        }
        
       alertify.success('Article Saved')
       handleBtn();
      }
    const handleDisplay = () => {
        classToggler === true ? setClassToggler(false) : setClassToggler(true);
//d-none d-block
    }

    const handleBtn = () =>{
       if(JSON.parse(localStorage.getItem('article'))[0]){
           setShowBtn(true)
       }else{
           setShowBtn(false)
       }
    }
    
    let showArticle;
   if(values[0]){
       
       showArticle = Array(values.join(' ')).map((item, index) => {
            return (
                <Col className='article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5'>
                    <Col className={`article d-${classToggler === true ? 'block' : 'none'} my-4 px-5`}>
                        <div className="article-group text-left">
                            <p>
                                {item}
                            </p>
                        </div>
                        <div className="article-group mt-4 d-flex justify-content-around">
                            <button
                                onClick={() => editArticle({
                                    id: index,
                                    article: item
                                })}
    
                                className="button btn-regular submit">
                                Select & Edit
                            </button>
                            <Link to='/Saved' id="saved" className={`btn-regular submit d-${showBtn === true ? 'block': 'none'}`}>Saved Articles</Link>
                        </div>
                    </Col>
{/*------------------------------------------------------------------ */}
                    {/* editing part starts */}
                    <Col className="article my-4 px-5">
                        <Form className={`form-edit d-${classToggler === true ? 'none' : 'block'}`} onSubmit={handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label
                                    style={{ color: '#242424', fontWeight: '500' }}>
                                    Edit Article
                                </Form.Label>
                                <Form.Control
                                    className="input-field"
                                    ref={textArea}
                                    as="textarea" rows={5} />
                            </Form.Group>
                            <Form.Group className="text-center">
                                <button
                                    onClick={() => saveEdit({
                                        article: textArea.current.value
                                    })}
                                    className="mt-4 btn-regular submit">
                                    Save
                                </button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Col>
            )
        })
   }
    return (
        <>
            {showArticle}
        </>
    )
}

export default ArticleCard