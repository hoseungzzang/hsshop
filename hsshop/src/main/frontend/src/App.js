import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Shopmain from './routes/Shopmain.js';
import logo from './assets/logo.svg'
function App() {

  return (
    <div className="App">
      <Navbar variant="dark">
        <Container>
          <div className="row justify-content-center w-100">
         
              <Navbar.Brand href="#home" className="">
                <img
                  alt=""
                  src={logo}
                  width="20"
                  height="20"
                  className="d-inline-block align-top App-logo"
                />{' '}
                Hs's Shop
              </Navbar.Brand>

            
          </div>
        </Container>
      </Navbar>
      <div className="headerBar">
      <Container>
          <div className="row justify-content-around align-items-center w-100 ">
          <div className='col-2'>메뉴바위치</div>
       
          <div className='col-2 '>
          <Button className="headerBtn headerBtnOut">로그인</Button>
          <Button className="headerBtn headerBtnOut" >회원가입</Button>
            </div>
            
          </div>
        </Container>

      </div>
      <Container>
        <Routes>
          <Route path='/' element={
            <Shopmain />
          } />
        </Routes>
      </Container>

    </div>
  );
}

export default App;