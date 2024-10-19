import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

//페이지 이동 링크
import Signup from './page/user/singnup/Signup';
import DirectMessages from './page/dm/DirectMessages';
import Login from './page/user/login/Login';

const container = document.getElementById('root');

if (!container) { // container 빈값 체크
  throw new Error("Failed to find the root element");
}

createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <App/> } />
          <Route path = "/user/signup/Signup" element = {<Signup/>} />
          <Route path = "/user/login/Login" element = {<Login/>} />
          <Route path = "/dm/directMessages" element = {<DirectMessages/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
