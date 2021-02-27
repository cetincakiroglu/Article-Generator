import React,{useState,useEffect,useRef} from 'react'
import {Row,Col,Card, Form} from 'react-bootstrap'
import alertify from 'alertifyjs'
import {BiEdit, BiTrash} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'
import ScrollArrow from './ScrollArrow'


function SavedArticles() {
    const [savedItems, setSavedItems] = useState([])
    const [classToggler, setClassToggler] = useState(true);
    const [id,setid] = useState('')

const getSavedItems = () =>{
        const items = JSON.parse(localStorage.getItem('article'));
        if(items !== null){
            console.log('SAVED',items)
            const newItems = items;
            console.log('NEWITEMS', newItems)
            // setSavedItems(newItems);
            setSavedItems(newItems)
            console.log('SAVED ITEMS' ,savedItems)
        } else{
            return;
        }
        
    }
    const handleDisplay = () => {
        classToggler === true ? setClassToggler(false) : setClassToggler(true);
//d-none d-block
    }
    const text = useRef();
   
    
const deleteItem = (num) =>{
    savedItems.splice(num,1);
    setSavedItems([...savedItems]);
    localStorage.setItem('article',JSON.stringify(savedItems))
    alertify.error('Article Deleted')
}

const editItem = (obj,num) =>{
    setid(obj.id);
    text.current.value = obj.article;
    console.log(obj,num)
    handleDisplay();
}


const handleSubmit = (e) =>{
    e.preventDefault();

}

const updateArticle = (obj) =>{
    const newText = text.current.value;
    const newInput = {id: id, text:obj.article}
    let array = [...savedItems];
    array = array.map(item => item.id === newInput.id ? item = newInput : item);
    setSavedItems(array);
    if(localStorage.getItem('article')){
        localStorage.setItem('article', JSON.stringify(array))
    }

    handleDisplay();
    text.current.value = '';
    alertify.success('Article Updated')
}

useEffect(()=>{
    getSavedItems();
},[])
    return (
        <>
        <Row className="my-5">
            <h2 className="green pl-3">Saved Articles</h2>
        </Row>
        <Row className="d-flex justify-content-between">
        
           {savedItems.map((item,index)=>(
            <>
                <Col className="article m-4 p-4 d-flex flex-column justify-content-between" md={5}>
                <h2>#{index+1} </h2>
                <p>{item.text}</p>
               <div className="d-flex justify-content-around">
               
                    <button
                        onClick={() => deleteItem(index)}
                        className="btn-secondary danger">
                    <BiTrash className="react-icons"/>
                    </button>
                    <button
                        onClick={() => editItem({
                        id: item.id,
                        article: item.text
                    },index)}
                        className="btn-secondary submit">
                        <BiEdit className="react-icons"/>
                    </button>
                    </div>
                </Col>
            </> 
            ))}
              {/* editing part starts */}        
        <Col className={`article col-md-12 d-${classToggler===true ? 'none' : 'block' }`}>
        <Form className={`form-edit`} onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ color: '#242424', fontWeight: '500' }}>
                    Edit Article
                </Form.Label>
                <Form.Control className="input-field" ref={text} as="textarea" rows={5} />
            </Form.Group>
            <Form.Group className="text-center">
                <button onClick={()=> updateArticle({
                    article: text.current.value
                    })}
                    className="btn-regular submit">
                    Update
                </button>
            </Form.Group>
        </Form>
        </Col>
        </Row>
        <ScrollArrow className="align-self-end" />
        </>
    )
}

export default SavedArticles


