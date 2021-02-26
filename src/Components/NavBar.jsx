import React,{useState} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function NavBar(props) {
  
    const displayNav = props.links.filter((item)=> item.isLink)
    .map((item,index) => (
        <Nav.Link className={`nav-items`} key={index}>
          <Link  to={item.link}>{item.title}</Link>
        </Nav.Link>

    ))
    return (
        <>
            <Navbar id="nav" className="d-flex justify-content-between p-0 m-0">
                <Navbar.Brand className="pl-3" href="/">Article Generator</Navbar.Brand>
                <Nav className="nav-elements">
                {displayNav}
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
