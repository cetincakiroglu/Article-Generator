import React,{useState, useEffect} from 'react'
import {Col,Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard';
import alertify from 'alertifyjs'
import Spinner from './Spinner'


//bu componentta eşleşen paragrafları gösteriyoruz -----------------------

function SearchResults({
    matchedArticle,
    setMatchedArticle,
    setid,
    id,
    values,
    setValues
}) {  
    


    const selectFeedback = () =>{
        alertify.success('Paragraph Selected')
    }
    const deselectFeedback = () =>{
        alertify.error('Paragraph Removed')
    }

    const getSelectedItems = (e) =>{
        e.stopPropagation();
        const item = e.target.innerText;
        const array  =values;
        if(values.includes(item)){
            values.splice(item.index,1)
            setValues([...values]);
            deselectFeedback();
        }else{
            setValues([...values,item]);
            console.log(values)
            selectFeedback();
        }
    }

    let renderItems;
    if(matchedArticle){
        renderItems = matchedArticle.map((item,index)=>(
        <Col className='article article-list col-md-10 col-sm-10 offset-md-1 d-flex flex-column align-items-center mb-5' onClick={getSelectedItems}>
        <Col className={`article my-4 px-5`}>
            <div className="article-group select text-left" >
                <p>
                {item.paragraph}
                </p>
            </div>
        </Col>
    </Col>
    ))
    } else{
        return '';
    }
    

    return (
        <>
        {matchedArticle[0] ? (renderItems) : (<Spinner />)}
        <ArticleCard 
        values = {values}
        setValues ={setValues}
        />

      </>
    )
}

export default SearchResults
