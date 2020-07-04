import React from 'react';
import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <div className="main">
      <header className="absolute App-header ">
        <ul className="App-ul ">
          <li ><a href="url">platform</a></li>
          <li ><a href="url">docs</a></li>
        </ul>
      </header>
      <div className="dop-block">
        <div className="con">
          <h1 className="skyN">SkyMP</h1>
          <button className="btn">Download</button>
        </div>
      </div>
    </div>   
  );
  
}

export default App;
