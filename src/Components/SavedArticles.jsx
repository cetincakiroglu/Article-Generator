import React,{useState,useEffect} from 'react'
import {Row,Col,Card} from 'react-bootstrap'


function SavedArticles() {
    const [savedItems, setSavedItems] = useState([])

//TODO: bu componentta depolanan text'i çekiyoruz. Şimdilik 1 tane çekiyor. 2. fail
    

const getSavedItems = () =>{
        const items = JSON.parse(localStorage.getItem('article'));
        if(items !== null){
            console.log('SAVED',items)
            const newItems = items;
            console.log('NEWITEMS', newItems)
            setSavedItems(newItems);
            console.log('SAVED ITEMS' ,savedItems)
        } else{
            return;
        }
        // if(item !== [[]] && item !== null) setSavedItems([...item,item])
        // if(savedItems.includes(item)){
        //     console.log('SAVED ITEM ALREADY HERE')
        // }
    }
    
    
    
    // let itemsToRender;
    // if(savedItems){
        //TODO bunu tekrar tekrar çağırman lazım. Yolunu bul!
        let itemsToRender = savedItems.map((item,index)=>(
            <>
                <Col className="article m-4" md={5}>
                <h2>#{item.id} </h2>
                <p>{item.text}</p>
                </Col>
            </> 
            ))
        // }
        
        useEffect(()=>{
            getSavedItems();
        },[])   
    return (
        <>
        <Row className="d-flex justify-content-between">
     
           {savedItems.map((item)=>(
            <>
                <Col className="article m-4" md={5}>
                <h2>#{item.id} </h2>
                <p>{item.text}</p>
                </Col>
            </> 
            ))}
        
      
        </Row>
        </>
    )
}

export default SavedArticles
