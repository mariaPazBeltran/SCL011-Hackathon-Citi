import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class KeyBoard extends Component{
    render(){
        return (
            <div className='container_keyBoard'>
                <div className="keyboard_tabs">
                <button value={1} onClick={this.props.clickButton}>1</button>
                <button value={2} onClick={this.props.clickButton}>2</button>
                <button value={3} onClick={this.props.clickButton}>3</button>
              </div>
              <div className="keyboard_tabs">
                <button value={4} onClick={this.props.clickButton}>4</button>
                <button value={5} onClick={this.props.clickButton}>5</button>
                <button value={6} onClick={this.props.clickButton}>6</button>
              </div>
              <div className="keyboard_tabs">
                <button value={7} onClick={this.props.clickButton}>7</button>
                <button value={8} onClick={this.props.clickButton}>8</button>
                <button value={9} onClick={this.props.clickButton}>9</button>
              </div>
              <div className="keyboard_tabs">
                  <button></button>
                  <button value={0} onClick={this.props.clickButton}>0</button>
                  <Link to='/home'><button className='ok'>ok</button></Link>
                </div>
        
            </div>
        )
    }
}
export default KeyBoard;