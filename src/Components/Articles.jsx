import React,{useRef, useState} from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import ArticleCard from './ArticleCard'
import SearchResults from './SearchResults'
function Articles({ saveEdit, formInput , matchedArticle, setid,setIsEdit,isEdit,values,setValues}) {


    return (
        <>
            <Row className="gx-0 m-0 p-0 d-flex justify-content-between">
                <SearchResults 
                 formInput={formInput}
                 matchedArticle = {matchedArticle}
                 saveEdit = {saveEdit}
                 setid = {setid}
                 setIsEdit = {setIsEdit}
                 isEdit = {isEdit}
                 values ={values}
                 setValues = {setValues}
                />         
            </Row>
        </>
    )
}

export default Articles