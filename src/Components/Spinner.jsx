import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Spinner({showSpinner}) {
    return (
        <div className={`sk-chase d-${showSpinner ? 'block' : 'none'}`}>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    )
}

export default Spinner
