import React, {useState} from 'react';
import {BiArrowToTop} from 'react-icons/bi';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
      <>
        <BiArrowToTop className="align-self-center scrollTop" onClick={scrollTop} style={{display: showScroll ? 'block' : 'none'}} /> 
      </>
  );
}

export default ScrollArrow;