import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ArticleCard({matchedArticle, saveEdit, setid}) {

    const [classToggler, setClassToggler] = useState(true);

    const textArea = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDisplay();
    }

    const editArticle = (obj) => {
        setid(obj.id);
        textArea.current.value = obj.article;
        handleDisplay();
    }

    const handleDisplay = () => {
        classToggler === true ? setClassToggler(false) : setClassToggler(true);
//d-none d-block
    }
    const showArticle = matchedArticle.map((item, index) => {
        return (
            <Col className='article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5'>
                <Col className={`article d-${classToggler === true ? 'block' : 'none'} my-4 px-5`}>
                    <div className="article-group text-left">
                        <p>
                            {item}
                        </p>
                    </div>
                    <div className="article-group mt-4 d-flex justify-content-center">
                        <button
                            onClick={() => editArticle({
                                id: index,
                                article: item
                            })}

                            className="button">
                            Select & Edit
                        </button>
                    </div>
                </Col>

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
        </>
    )
}

export default ArticleCard