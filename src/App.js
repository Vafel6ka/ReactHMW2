import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <div className='wrapper'>
        <Main />
      </div>
    </div>
  );
}

export default App;