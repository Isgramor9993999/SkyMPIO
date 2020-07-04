import React from 'react';
import './styles/index.css';
import './styles/bac.css';
import bac from './img/bac.jpg';


function Images() {
  return (
    <div className="h-screen w-screen bg-left-top fixed titleo"  style={{backgroundImage: `url(${bac})`}}></div>

     );
}

export default Images;
