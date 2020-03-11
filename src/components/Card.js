import React, { useState } from 'react';
import db from '../firebase-config/firebase';
import './card.css';

function CardData() {
    const [cardNumber, setNumber] = useState([])
    const [cardExpire, setExpiration] = useState([])
    const [cvv, setCvv] = useState([])
    const [name, setName] = useState([])


const newCardInfo = () => {
    db.collection('CardInfo').add({
        balance: 200000,
        bank: 'Banco Estado',
        cardNumber: cardNumber,
        cardExpire: cardExpire,
        cvv:cvv,
        name:name,
    })
}

return(
    <div className="container-card">
            <h3>Agregar nueva tarjeta</h3>
                <input className="card-info" type="number" value={cardNumber} onChange={(e) => setNumber(e.target.value)} placeholder="Numero de tarjeta"></input>
                <input className="card-info" type="number" value={cardExpire} onChange={(e) => setExpiration(e.target.value)} placeholder="Fecha de expiración"></input>
                <input className="card-info" type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV"></input>
                <input className="card-info" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre titular"></input>
                <button className="btn-add" onClick={newCardInfo} >Confirmar información</button>
    </div>
)
}

export default CardData;
