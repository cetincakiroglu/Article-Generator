import React,{useState,useEffect} from 'react'
import {Row,Col,Card} from 'react-bootstrap'


function SavedArticles() {
    const [savedItems, setSavedItems] = useState([])

//TODO: bu componentta depolanan text'i çekiyoruz. Şimdilik 1 tane çekiyor. 2. fail
    const getSavedItems = () =>{
        let item = JSON.parse(localStorage.getItem('article'));
        if(item !== [[]] && item !== null) setSavedItems([...savedItems,item])
        if(savedItems.includes(item) )
        console.log('SAVED ITEMS ', savedItems);
        
    }
    console.log('savedArticles')
    useEffect(()=>{
        getSavedItems();
    },[])
   
    
    let itemsToRender;
    
    
    if(savedItems){
        //TODO bunu tekrar tekrar çağırman lazım. Yolunu bul!
        itemsToRender = savedItems.map((item,index)=>(
            <>
                <Col className="article m-4" md={5}>
                <h2>#{item.id} </h2>
                <p>{item.text}</p>
                </Col>
                </> 
            ))
        }
        

    
    return (
        <>
        <Row className="d-flex justify-content-between">
           {itemsToRender}
        </Row>
        </>
    )
}

export default SavedArticles
