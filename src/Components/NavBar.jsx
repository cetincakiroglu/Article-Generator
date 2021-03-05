import React from 'react'
import {Nav, Navbar, Col} from 'react-bootstrap'
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
            <Navbar id="nav" className="d-flex justify-content-between p-0 m-0" expand="lg">
                <Navbar.Brand href="/" id="logo" className="ml-md-4 green">Article Generator</Navbar.Brand>
                <Col className="col-lg-5 col-sm-4 mb-sm-5 mb-md-5 mb-lg-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-sm-5" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="nav-elements">
                        {displayNav}
                    </Nav>
                </Navbar.Collapse>
                </Col>
            </Navbar>
        </>
    )
}

export default NavBar
