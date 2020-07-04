import React from 'react';
import './styles/index.css';
import './styles/bac.css';
import bac from './img/bac.jpg';


function App() {
  return (
    <div>
    <div className="h-screen w-screen fixed bg-left-top titleo" style={{backgroundImage: `url(${bac})`,}}></div>
    <header className="z-1">
    <ul className="ml-0 pl-0 ">
      <li className="list-none">Platform</li>
      <li>Docs</li>
    </ul>
    </header>
    </div>

    
    
  );
  
}

export default App;
