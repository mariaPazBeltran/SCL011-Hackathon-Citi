import React, { useState, useEffect } from 'react';
import db from '../firebase-config/firebase';
import './showcards.css';
import './menu.css';
import {Link} from 'react-router-dom';

function ShowCard(){
    const [card, setCard] = useState([])

    useEffect(() => {
        db
          .collection("CardInfo")
          .onSnapshot((snapshot) => {
            const newCard = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setCard(newCard)
          })
    
      }, [])

    return(
        <div>
          <div className="padd">
            <h3>Pago rápido</h3>
        {card.map((Card) =>
            <div className="showCards">
            <p className="card-info">$ {Card.balance}</p>
            <p className="card-info">{Card.bank}</p>
            <p className="card-info">{Card.cardNumber}</p>
            <div className="info-display">
            <p className="card-info">{Card.name}</p>
            <p className="card-info">{Card.cardExpire}</p>
            </div>
            </div>

        )}
        <h3>¿Cómo quieres usar la tarjeta?</h3>

        <div className="btn-show">
               <button className="btn-action">
               <Link className="ok" to='/claveDinamica'>
               <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.34312 0 3 1.33355 3 2.97872V8.93617C2.00002 10.6737 0 15.4894 0 20.8511C0 24.6736 1.46384 26.5582 3 27.4719V62.5532C3 64.1984 4.34312 65.5319 6 65.5319H22.5V62.5532H6V56.5957H22.5V53.617H6V28.2979C9 28.2979 12 26.0638 12 23.8298V23.0851C12 25.964 14.3505 28.2979 17.25 28.2979C20.1495 28.2979 22.5 25.964 22.5 23.0851C22.5 25.964 24.8505 28.2979 27.75 28.2979C30.6495 28.2979 33 25.964 33 23.0851V23.8298C33 26.0638 36 28.2979 39 28.2979V41.7021H42V27.4719C43.5362 26.5582 45 24.6736 45 20.8511C45 15.4894 43 10.6737 42 8.93617V2.97872C42 1.33355 40.6569 0 39 0H6ZM6 7.44681H39V2.97872H6V7.44681ZM2.25 20.8511C2.25 16.7266 4.25002 11.7622 4.875 10.4255H10.5V21.8821C10.5 23.6007 8.625 25.3191 6.75 25.3191C6.71027 25.3191 6.66582 25.3204 6.61716 25.3224C6.56657 25.3244 6.51137 25.3271 6.45213 25.3302L6.44289 25.3308C5.20853 25.3951 2.25 25.5493 2.25 20.8511ZM13.5 21.5957V10.4255H21V21.5957C21 23.6522 19.3211 25.3191 17.25 25.3191C15.1789 25.3191 13.5 23.6522 13.5 21.5957ZM24 21.5957V10.4255H31.5V21.5957C31.5 23.6522 29.8211 25.3191 27.75 25.3191C25.6789 25.3191 24 23.6522 24 21.5957ZM34.5 21.8821V10.4255H40.125C40.75 11.7622 42.75 16.7266 42.75 20.8511C42.75 25.5493 39.7915 25.3951 38.5571 25.3308L38.5479 25.3302C38.4316 25.3242 38.331 25.3191 38.25 25.3191C36.375 25.3191 34.5 23.6007 34.5 21.8821Z" fill="white"/>
<path d="M22.5 58.0851V61.0638H16.5V58.0851H22.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 44.6809C26.8431 44.6809 25.5 46.0144 25.5 47.6596V67.0213C25.5 68.6664 26.8431 70 28.5 70H57C58.6568 70 60 68.6664 60 67.0213V47.6596C60 46.0144 58.6569 44.6809 57 44.6809H28.5ZM57 52.1277V47.6596H28.5V52.1277H57ZM28.5 67.0213V56.5957H57V67.0213H28.5Z" fill="white"/>
</svg>
</Link>   
 <br></br>
 
            Comprar</button>  
            <button className="btn-action">
        <svg width="57" height="66" viewBox="0 0 57 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 61.5V58.5H13.5V61.5H25.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34312 0 0 1.34308 0 3V63C0 64.6569 1.34312 66 3 66H36C37.6568 66 39 64.6569 39 63V48H36V54H3V10.5H36V19.5H39V3C39 1.34308 37.6569 0 36 0H3ZM36 7.5V3H3V7.5H36ZM3 63V57H36V63H3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 33.75C43.5 36.6495 41.1495 39 38.25 39C35.3505 39 33 36.6495 33 33.75C33 30.8505 35.3505 28.5 38.25 28.5C41.1495 28.5 43.5 30.8505 43.5 33.75ZM40.5 33.75C40.5 34.9926 39.4926 36 38.25 36C37.0074 36 36 34.9926 36 33.75C36 32.5074 37.0074 31.5 38.25 31.5C39.4926 31.5 40.5 32.5074 40.5 33.75Z" fill="white"/>
<path d="M51 33.75C51 34.9926 49.9926 36 48.75 36C47.5074 36 46.5 34.9926 46.5 33.75C46.5 32.5074 47.5074 31.5 48.75 31.5C49.9926 31.5 51 32.5074 51 33.75Z" fill="white"/>
<path d="M27.75 36C28.9926 36 30 34.9926 30 33.75C30 32.5074 28.9926 31.5 27.75 31.5C26.5074 31.5 25.5 32.5074 25.5 33.75C25.5 34.9926 26.5074 36 27.75 36Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 22.5H57V45H19.5V22.5ZM25.5 25.5H51L54 28.5V39L51 42H25.5L22.5 39V28.5L25.5 25.5Z" fill="white"/>
</svg><br></br>
            Pagar online</button>        

        </div>
        </div>
        <div className="container-menu">
         
                <button className="vector-direction">
               <Link to='/Pin'>    
                  <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.82L12.1457 0L0 12L12.1457 24L15 21.18L5.72874 12L15 2.82Z" fill="white"/>
</svg>
</Link> 
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
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.46532e-07 21.18L2.85425 24L15 12L2.85425 -1.06182e-06L1.85161e-06 2.82L9.27126 12L2.46532e-07 21.18Z" fill="white"/>
</svg>

                </button>
            </div>
        </div>
    )
}

export default ShowCard