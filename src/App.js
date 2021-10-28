import React from 'react';
import './Components/CSS/App.css';
import HeaderNavBar from './Components/layout/HeaderNavBar/HeaderNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>App Test</p>
      <HeaderNavBar />
    </div>
  );
}

export default App;
