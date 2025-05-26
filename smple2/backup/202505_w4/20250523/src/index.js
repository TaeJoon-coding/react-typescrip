import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Modal2 from './Modal_2';
// 「App」を除いて「Modal_2」を入れると、純粋に「Modal_2」だけを入れるのも可能。

import reportWebVitals from './reportWebVitals';


// この「index.js」こそがキー

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 「<React.StrictMode>」を除いて、<>をかわりにいれても機能する。 */}
    <App />
    {/* <Modal2/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
