import React,{useState, useEffect} from 'react'
import {Col,Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard';

function SearchResults({
    matchedArticle,
    setMatchedArticle,
    setid,
    id
}) {  
    const [isActive,setActive] = useState('');
    
    const [values,setValues] = useState([])
    const getSelectedItems = (e) =>{
        e.stopPropagation();
        isActive === false ? setActive(true) : setActive(false);
        const item = e.target.innerText;
        const array =values;
        if(values.includes(item)){

            values.splice(item.index,1)
            setValues([...values]);
        }else{
            setValues([...values,item]);
            console.log(values)
        }
    }

    const saveEdit = (obj) =>{
        const text = obj.article;
        // let article = [...values];
        let article = [text]
        setValues(article);
        
        sessionStorage.setItem('article', JSON.stringify(article));
        console.log(typeof article)
        
      }
      const getStoredArticle = () =>{
        let storedArticle = JSON.parse(sessionStorage.getItem('article'));
        if(storedArticle !== [[]] && storedArticle !== null) setValues([...storedArticle]);
      }

      useEffect (()=>{
    getStoredArticle();
  },[])

    let renderItems;
    if(matchedArticle){
        renderItems = matchedArticle.map((item,index)=>(
        <Col className='article article-list col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5' onClick={getSelectedItems}>
        <Col className={`article my-4 px-5 `}>
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
        {renderItems}
        <ArticleCard 
        saveEdit = {saveEdit}
        values = {values}
        />
      </>
    )
}

export default SearchResults
