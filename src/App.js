import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    
    <div className="wrapper">
      <Header />
      <div className='content'>
        <Main />
      </div>
    </div>
  );
}

export default App;
