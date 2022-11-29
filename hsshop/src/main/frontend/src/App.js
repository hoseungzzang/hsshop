import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Shopmain from './routes/Shopmain.js';
import Detail from './routes/Detail.js';
import Footer from './routes/Footer.js';
import logo from './assets/logo.svg'
function App() {

  return (
    <div className="App">

      <div className="headerBar">
        <div className='header'>
          <div className='loginBox'>
            <a>로그인</a>
            <a>회원가입</a>
          </div>

          <div className='mainTitle'>
            <img
              alt=""
              src={logo}
              width="20"
              height="20"
              className="d-inline-block align-top App-logo"
            />HS's Shop
          </div>

          <div className='categoryNav'>
            <div><img
              className="categotyImg"
              src={require('./images/category.png')}
            />
              카테고리</div>
            <div className='eCategory'>
              <a>이벤트</a>
              <a>기부</a>
              <a>공지사항</a>
            </div>
            <div>장바구니</div>
          </div>

        </div>

      </div>

      <Routes>
        <Route path='/' element={
          <Shopmain />
        } />
        <Route path='/detail' element={
          <Detail />
        } />
      </Routes>

        <Footer></Footer>

    </div>
  );
}

export default App;