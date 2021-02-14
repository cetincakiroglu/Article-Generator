import React,{ useState,useRef } from 'react'
import { Col, Form } from 'react-bootstrap'

function ArticleCard({formInput}) {
    const [text,setText] = useState('');
    const [displayEdit,setDisplayEdit] = useState ('');
    const [displayArticle,setDisplayArticle] = useState('');
    const textArea = useRef();

    const handleDisplay = () => {

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const saveEdit = (e) => {
        e.preventDefault();
        const 
    }

    const [id,setid] = useState(-1);
    const editArticle = (obj) =>{
        setid(obj.id);
        textArea.current.value= obj.value;
    }
   
    const article = formInput.map((text,index) =>{
        return(
            <Col className={`article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5 p-4 d-${displayArticle}`}>
            <div className="article-group mt-md-5">
                <p>
                   {text}
                </p>
            </div>
            <div className="article-group">
                <button
                onClick={()=>editArticle({
                    id:index,
                    value: text
                })} onClick={()=>handleDisplay()}
                className="button mt-md-5">
                    Select & Edit
                </button>
            </div>
        </Col>
        )
    })
    return (
        <>
           {article}
           <Col className ={`article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5 p-4 d-${displayEdit}`}>

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
                <button className="button">
                    Save
                </button>
            </Form.Group>
           </Form>
           </Col>
        </>
    )
}

export default ArticleCard
