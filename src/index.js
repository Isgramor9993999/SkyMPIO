import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Images from './Images'
import './styles/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <Images />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
