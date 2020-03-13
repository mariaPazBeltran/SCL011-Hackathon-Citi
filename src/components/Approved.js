import React, { Component, useEffect, useState } from 'react';
import db from '../firebase-config/firebase';
import './approved.css';
import './confirmation.css';
import './menu.css';
import {Link} from 'react-router-dom';


class ApprovedPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            datos: []
        }
    }
    // function(){
    // const [charge, setCharge] = useState([])

    // useEffect(() => {
    //     db
    //       .collection("PinInfo")
    //       .onSnapshot((snapshot) => {
    //         const newCharge = snapshot.docs.map((doc) => ({
    //           id: doc.id,
    //           ...doc.data()
    //         }))
    //         setCharge(newCharge)
    //       })
    
    //   }, [])
    // }
    componentDidMount() {

        db.collection("PinInfo")
              .onSnapshot((snapshot) => {
                this.setState({datos: snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                  }))
                  })
              })
        // let day = new Date().getDay(); 
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        this.setState({
            date: date + " / " + "0" + month + " / " + year
        })          
        console.log(this.state.datos);
        }
    
    
    render() {
        return (
            <div>
                <h3>Comprobante</h3>
                <div className="pay-receipt">
                    <div className="approved-logo">
                        <svg className="confirmed" width="78" height="78" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 1.83333C33.1222 1.83333 42.1667 10.8778 42.1667 22C42.1667 33.1222 33.1222 42.1667 22 42.1667C10.8778 42.1667 1.83333 33.1222 1.83333 22C1.83333 10.8778 10.8778 1.83333 22 1.83333ZM22 0C9.83889 0 0 9.83889 0 22C0 34.1611 9.83889 44 22 44C34.1611 44 44 34.1611 44 22C44 9.83889 34.1611 0 22 0Z" fill="white" />
                            <path d="M18.3334 30.0667L12.3445 24.0167L13.6278 22.7333L18.3334 27.5L30.4945 15.3389L31.7778 16.6222L18.3334 30.0667Z" fill="white" />
                        </svg>
                    </div>
                    <h4>Tu pago se ha <br></br>
                        realizado con éxito</h4>
                        {this.state.datos.map((val, index)=>{
                            return <p key={index} className="price-display"> ${val.charge}</p>
                        })}
                        
                    <p>{this.state.date}</p>
                    <Link to='/home'>
                    <button className="btn-end">Finalizar</button>
                    </Link>
                </div>
                <div className="container-menu">
                <button className="vector-direction"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.82L12.1457 0L0 12L12.1457 24L15 21.18L5.72874 12L15 2.82Z" fill="white"/>
</svg>
</button>
                <button className="vector-menu">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67 35C67 52.6731 52.6731 67 35 67C17.3269 67 3 52.6731 3 35C3 17.3269 17.3269 3 35 3C52.6731 3 67 17.3269 67 35Z" fill="#1F45CB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM35 67C52.6731 67 67 52.6731 67 35C67 17.3269 52.6731 3 35 3C17.3269 3 3 17.3269 3 35C3 52.6731 17.3269 67 35 67Z" fill="#EDEFF4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 36C21.5 35.1716 22.1716 34.5 23 34.5H47C47.8284 34.5 48.5 35.1716 48.5 36C48.5 36.8284 47.8284 37.5 47 37.5H23C22.1716 37.5 21.5 36.8284 21.5 36Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 29C21.5 28.1716 22.1716 27.5 23 27.5H47C47.8284 27.5 48.5 28.1716 48.5 29C48.5 29.8284 47.8284 30.5 47 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 42C21.5 41.1716 22.1716 40.5 23 40.5H47C47.8284 40.5 48.5 41.1716 48.5 42C48.5 42.8284 47.8284 43.5 47 43.5H23C22.1716 43.5 21.5 42.8284 21.5 42Z" fill="white"/>
</svg>

                </button>
               

                <button className="vector-direction"> 
                <Link to='/home'>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.46532e-07 21.18L2.85425 24L15 12L2.85425 -1.06182e-06L1.85161e-06 2.82L9.27126 12L2.46532e-07 21.18Z" fill="white"/>
</svg>
</Link>
                </button>
            </div>
            </div>
        )
    }
}
export default ApprovedPay;
