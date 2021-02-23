import React,{useState,useContext} from 'react'
import {Col,Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard';

function SearchResults({
    matchedArticle,
    saveEdit,
    setid
}) {  
   const [values,setValues] = useState([])
    const getSelectedItems = (e) =>{
        
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

    let renderItems;
    if(matchedArticle){
        renderItems = matchedArticle.map((item,index)=>(
        <Col className='article col-md-10 offset-md-1 d-flex flex-column align-items-center mb-5'>
        <Col className={`article my-4 px-5`}>
            <div className="article-group select text-left" onClick={getSelectedItems}>
                <p>
                {item}
                </p>
            </div>
            <div className="article-group mt-4 d-flex justify-content-center">
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
        <Link to='/Editing'>Continue</Link>
        <ArticleCard 
        saveEdit = {saveEdit}
        values={values}
        />
      </>
    )
}

export default SearchResults
