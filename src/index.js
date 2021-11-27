import React from 'react';
import {render} from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import OtherWorld from './other-world';



render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/other" element={<OtherWorld/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

