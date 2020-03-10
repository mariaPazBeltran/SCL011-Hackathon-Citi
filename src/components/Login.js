import React from 'react';

import '../App.css';

const Login = ()=> {
  return (
    <div className="login_container">
        <h3>inicio de sesión</h3>
      <div className='container_email'>
          
          <input className='inputs' type='email' placeholder='email'/>
      </div>
      <div className='container_password'>
          
          <input className='inputs' type='password' placeholder='contraseña'/>
      </div>
      <button>Iniciar</button>
    </div>
  );
}

export default Login;
