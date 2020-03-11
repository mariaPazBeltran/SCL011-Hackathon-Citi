import React, {useState} from 'react';
import {auth} from '../firebase-config/firebase'
import '../App.css';

const Login = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }
    const logIn = ()=>{
        auth.signInWithEmailAndPassword(email, password)
      .then(() => {
       console.log('ok')
      })
      // catch funciona cada vez que hay un error
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode)
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
        alert("Tu usuario o contraseña son incorrectos")
      })
    }
  return (
    <div className="login_container">
        <h3>inicio de sesión</h3>
      <div className='container_email'>
          
          <input onChange={onChangeEmail} className='inputs' type='email' placeholder='email'/>
      </div>
      <div className='container_password'>
          
          <input onChange={onChangePassword} className='inputs' type='password' placeholder='contraseña'/>
      </div>
      <button onClick={logIn}>Iniciar</button>
    </div>
  );
}

export default Login;
