import React, { Component } from 'react';
import './style.css';
import KeyBoard from './KeyBoard';

class Pin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          pinPad: '',
        }
      }
     
      addPassword = e => {
         const num = e.target.value
         
        return this.state.pinPad.length === 4 ? '' : this.setState({pinPad: this.state.pinPad + num});
     }
   render(){
    const digit = this.state.pinPad.replace(/[1234567890]/gi, '*')
   
    return (
        <div className='container_pin'>
           <div className='pin_cont'>
           <h3 className='h3_pin'>Hola</h3>
            <p className='p_pin'>Ingresa tu Pin para comenzar</p>
           </div>
            <div className='pin'>{digit}</div>
            <KeyBoard
            clickButton={this.addPassword}/>
            <div className='ol_pin'>
                <p className='p_pin'>Olvidé mi pin</p>

            </div>
        
        </div>
    )}
}
export default Pin