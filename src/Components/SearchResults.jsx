import React,{useState, useEffect} from 'react'
import {Col,Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard';
//bu componentta eşleşen paragrafları gösteriyoruz -----------------------

function SearchResults({
    matchedArticle,
    setMatchedArticle,
    setid,
    id
}) {  

   //values'da kullanıcıdan aldığımız paragrafları depoluyoruz
    const [values,setValues] = useState([])
// kullanıcının seçtiği paragrafları almamızı sağlayan fonk.
    const getSelectedItems = (e) =>{
        e.stopPropagation();
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

    //düzenlen paragrafları burada kaydetmemiz gerekiyor, bu işlem ilk seferinde sorunsuz çalışırken ikincide fail oluyor.
    const saveEdit = (obj) =>{
        const text = obj.article;
        //random id beliriyoruz, obje olarak göndereceğiz
        const id =  Date.now().toString(36) + Math.random().toString(36).substr(2);
        let article = {id,text}
        // let article = [...values];
        // let article[id] = [text]
      //state'i güncelleyip localstorage'a kaydetmeyi dene. Objelerden oluşan bir array depola
        // console.log(values);      

        //localstorage a keydediyoruz
        localStorage.setItem('article', JSON.stringify(article));
        console.log(typeof article)
        
      }
  

    let renderItems;
    //TODO: array'in ilk elementini kontrol etmezsek error veriyor anlamış değilim düzeltilecek
    //burada state'de veri varmı kontrol ediyorum map işlemi fail olmasın diye
    if(matchedArticle[0]){
        renderItems = matchedArticle[0].map((item,index)=>(
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
        {renderItems}
        {/* burada ekrana veriyoruz */}
        <ArticleCard 
        saveEdit = {saveEdit}
        values = {values}
        />
      </>
    )
}

export default SearchResults
