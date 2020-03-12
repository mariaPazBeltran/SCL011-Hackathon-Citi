import React from 'react';
import './App.css';
import Login from './components/Login';
import CardInfo from './components/Card';
import ShowCard from './components/showCards';
import PinCode from './components/Pincode';
import Confirmation from './components/Confirmation';
import ApprovedPay from './components/Approved';


function App() {
  return (
    <div className="App">
      {/* {/* <Login/> */}
       {/* <PinCode/>   */}
     {/* <Confirmation/>  */}
      <ApprovedPay/> 
    </div>
  );
}

export default App;
