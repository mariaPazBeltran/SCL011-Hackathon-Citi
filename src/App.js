import React from 'react';
import {BrowserRouter as Router,
  Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { auth } from 'firebase';
import Pin from './components/pin/Pin';

function App() {
  return (
    <div className="App">
      <Router>
    <Route exact path="/">
  {auth ? <Redirect to="/Pin" /> : <Login/>}
</Route>
        
        <Route path="/pin" component={ Pin } />
        
    </Router>
    </div>
  );
}

export default App;
