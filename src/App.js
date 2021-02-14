import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <NavBar/>
    <Container>

      <LandingPage />  
    </Container>
    <Footer />
    </>
  );
}

export default App;
