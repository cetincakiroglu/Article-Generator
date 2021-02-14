import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function NavBar() {
    const NavElems = ['How It Works?', 'About Us', 'Contact'];
    const displayNav = NavElems.map((item) => (
        <Nav.Link>{item}</Nav.Link>

    ))
    return (
        <>
            <Navbar id="nav" className="d-flex justify-content-between">
                <Navbar.Brand href="#home">Article Generator</Navbar.Brand>
                <Nav className="nav-elements">
                {displayNav}
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
