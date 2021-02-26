import React,{useState, useEffect} from 'react'
import {Col,Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard';
//bu componentta eşleşen paragrafları gösteriyoruz -----------------------

function SearchResults({
    matchedArticle,
    setMatchedArticle,
    setid,
    id,
    values,
    setValues
}) {  
    
   

    const getSelectedItems = (e) =>{
        e.stopPropagation();
        const item = e.target.innerText;
        const array  =values;
        if(values.includes(item)){

            values.splice(item.index,1)
            setValues([...values]);
        }else{
            setValues([...values,item]);
            console.log(values)
        }
    }

    let renderItems;
    //TODO: array'in ilk elementini kontrol etmezsek error veriyor anlamış değilim düzeltilecek
    if(matchedArticle){
        //buradaki sıfırı sildim matchedArticle[0]
        renderItems = matchedArticle.map((item,index)=>(
        <Col className='article article-list col-md-10 col-sm-10 offset-md-1 d-flex flex-column align-items-center mb-5' onClick={getSelectedItems}>
        <Col className={`article my-4 px-5`}>
            <div className="article-group select text-left" >
                <p>
                {item}
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
      <Row className="d-flex flex-column justify-content-around">

        {renderItems}
        {/* burada ekrana veriyoruz */}
        <ArticleCard 
        values = {values}
        setValues ={setValues}
        />
      </Row>

      </>
    )
}

export default SearchResults
