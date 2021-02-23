import React,{useRef, useState} from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function Articles({ saveEdit, formInput , matchedArticle, setid}) {


    return (
        <>
            <Row className="gx-0 m-0 p-0 d-flex justify-content-between">
                <ArticleCard
                formInput={formInput}
                matchedArticle = {matchedArticle}
                saveEdit = {saveEdit}
                setid = {setid}
                />
         
            </Row>
        </>
    )
}

export default Articles