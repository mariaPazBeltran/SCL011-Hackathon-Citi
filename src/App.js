import React from 'react';
import {BrowserRouter as Router,
  Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { auth } from 'firebase';
import Pin from './components/pin/Pin';
import ShowCard from './components/showCards';
import CardData from './components/Card';

function App() {
  return (
    <div className="App">
      <Router>
    <Route exact path="/">
  {auth ? <Redirect to="/pin" /> : <Login/>}
</Route>
        
        <Route path="/pin" component={ Pin } />
        <Route path="/cardata" component={ CardData } />
        <Route path="/home" component={ ShowCard } />

    </Router>
    </div>
  );
}

export default App;
