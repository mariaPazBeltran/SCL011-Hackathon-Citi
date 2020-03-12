import React, { Component } from 'react';
import './approved.css';
import './confirmation.css';

class ApprovedPay extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:'',
        }
    }
    componentDidMount(){
        // let day = new Date().getDay(); 
        let date = new Date().getDate(); 
        let month = new Date().getMonth() + 1; 
        let year = new Date().getFullYear(); 
        this.setState({
            date:  date + " / " + "0"+month  + " / "  + year
        })
    }

    render() {
        return (
            <div>
                <h3>Comprobante</h3>
                <div>
                <svg className="confirmed" width="78" height="78" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 1.83333C33.1222 1.83333 42.1667 10.8778 42.1667 22C42.1667 33.1222 33.1222 42.1667 22 42.1667C10.8778 42.1667 1.83333 33.1222 1.83333 22C1.83333 10.8778 10.8778 1.83333 22 1.83333ZM22 0C9.83889 0 0 9.83889 0 22C0 34.1611 9.83889 44 22 44C34.1611 44 44 34.1611 44 22C44 9.83889 34.1611 0 22 0Z" fill="white"/>
<path d="M18.3334 30.0667L12.3445 24.0167L13.6278 22.7333L18.3334 27.5L30.4945 15.3389L31.7778 16.6222L18.3334 30.0667Z" fill="white"/>
</svg>
                    </div>
                <div className="pay-receipt">
                    <h4>Tu pago se ha <br></br>
                        realizado con éxito</h4>
                    <p className="price-display"> $ 5460</p>
                    <p>{this.state.date}</p>
                    <button className="btn-end">Finalizar</button>
                </div>
            </div>
        )
    }
}
export default ApprovedPay;
