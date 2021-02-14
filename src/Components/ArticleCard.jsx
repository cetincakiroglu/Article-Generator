import React,{ useState,useRef } from 'react'
import { Row ,Col, Form } from 'react-bootstrap'

function ArticleCard({ saveEdit ,matchedArticle }) {

    const [classToggler, setClassToggler] = useState(true);


    const textArea = useRef();  

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
   
    const [id,setid] = useState(-1);
    const editArticle = (obj) =>{
        setid(obj.id);
        textArea.current.value= obj.value;
    }
    
    const showArticle = matchedArticle.map((text,index) =>{
                return(
                    <Col  className='article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5'>
                        <Col className={`article d-block my-4 px-5`}>
                        <div className="article-group text-left">
                        <p>
                           {text}
                        </p>
                    </div>
                    <div className="article-group mt-4 d-flex justify-content-center">
                        <button
                        onClick={()=>editArticle({
                            id:index,
                            value: text
                        })}
                        className="button">
                            Select & Edit
                        </button>
                    </div>
                    </Col>
                   
                    {/* editing part starts */}
                   <Col className="article my-4 px-5">

                    <Form className="form-edit d-block" onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label 
                            style={{color: '#242424', fontWeight:'500'}}>
                                Edit Article
                            </Form.Label>
                            <Form.Control
                            className="input-field"
                            ref={textArea}
                            as="textarea" rows={5} />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <button
                            onClick={()=>saveEdit({
                                article: textArea.current.value
                            })}
                            className="button mt-4">
                                Save
                            </button>
                        </Form.Group>
                    </Form>
                   </Col>
                   
                    
                </Col>
                )
            })
    
    return (
        <>
           {showArticle}
           {/* <Col className ={`article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5 p-4 `}>

           <Form className="form-edit" onSubmit={handleSubmit}>
           <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label 
                style={{color: '#242424', fontWeight:'500'}}>
                    Edit Article
                </Form.Label>
                <Form.Control
                className="input-field"
                 ref={textArea}
                as="textarea" rows={5} />
            </Form.Group>
            <Form.Group className="text-center">
                <button
                onClick={()=>saveEdit({
                    article: textArea.current.value
                })}
                className="button">
                    Save
                </button>
            </Form.Group>
           </Form>
           </Col> */}
        </>
    )
}

export default ArticleCard
