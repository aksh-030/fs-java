import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar";
import home from './components/home';
import playlist1 from './components/playlist1';
import playlist2 from './components/playlist2';
import playlist3 from './components/playlist3';
import playlist4 from './components/playlist4';

function App() {
  return (
    <div>
      <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <Navbar />
        <Routes>
          <Route path="/" exact Component={home}/>
          <Route path="/playlist1" Component={playlist1}/>
          <Route path="/playlist2" Component={playlist2}/>
          <Route path="/playlist3" Component={playlist3}/>
          <Route path="/playlist4" Component={playlist4}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
