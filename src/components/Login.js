import React from 'react';

import '../App.css';

const Login = ()=> {
  return (
    <div className="login_container">
      <div className='container_email'>
          
          <input type='email' placeholder='email'/>
      </div>
      <div className='container_password'>
          
          <input type='password' placeholder='contraseña'/>
      </div>
    </div>
  );
}

export default Login;
