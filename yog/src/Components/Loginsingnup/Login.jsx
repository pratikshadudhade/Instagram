import React, { useState } from 'react'
import './Login.css';
// import user_icon from '../Assests/user_icon.jpeg';
// import email_icon from '../Assests/email_icon.jpeg';
// import password_icon from '../Assests/password _icon.jpeg';
function Login() {

    const[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
         <div className="inputes">
            {action==="Login"?<div></div>:<div className="input">
                {/* <img src={user_icon} alt=''/> */}
                <input type='text' placeholder='Name'/>
            </div>
}
            <div className="input">
                {/* <img src={email_icon} alt=''/> */}
                <input type='email' placeholder='Email address'/>
            </div>
            <div className="input">
                {/* <img src={password_icon} alt=''/> */}
                <input type='password' placeholder='Password'/>
            </div>
         </div>
         {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password?<span>Click here</span></div>
         }
         <div className="submit-container">
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            {/* <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}

         </div>
    </div>
  )
}

export default Login
