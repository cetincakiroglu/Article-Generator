import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Spinner({showSpinner}) {
    return (
        <div className={`sk-chase d-${showSpinner ? 'none' : 'block'}`}>
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
