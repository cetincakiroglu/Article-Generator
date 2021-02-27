import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'alertifyjs/build/css/alertify.css';

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import links from './Data/links'

function App() {
  const routeMaps = links.map((item,index)=>(
    <Route 
      key = {index}
      exact = {item.isExact}
      path = {item.link}
      component = {item.component}
    />
  ))
  return (
    <>
      <BrowserRouter>
        <NavBar
          links={links}
        />
        <Container id="main">
          {routeMaps}
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
