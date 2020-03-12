import React, { Component } from 'react';
import './pincode.css';
import db from '../firebase-config/firebase';
import TimerStart from './Timer';
const gpc = require('generate-pincode')



class PinCode extends Component{
    constructor(props){
        super(props);
        this.state = {
            pin:''
        }

    }
    newPin() {
        let pinCode = gpc(4)
        this.setState({
            pin: pinCode,
        })
            db.collection('PinInfo').add({
            name:'Elena',
            balance:200000,
            pin:pinCode
            })
    }
    
    componentDidMount() {
        
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () => this.update(),
          300000)
      }
      update(){
        this.setState({
            pin:''
        })
      }

    render(){
    return(
        <div>
        <div className="pin-code-view">
            <h3>Clave Dinámica</h3>
            <p className="pin-info">Genera una clave dinámica para autorizar la transacción</p>
            <p className="pin-code" id="pincode">{this.state.pin}</p>
            <h3>Tu clave expirará en</h3>
            <div className="display-btn">
            <button onClick={() =>{this.newPin()}} className="btn-pin">Generar Clave</button>
            </div>
        </div>  
         {/* <TimerStart /> */}
        </div>


    )
}

}
export default PinCode;
