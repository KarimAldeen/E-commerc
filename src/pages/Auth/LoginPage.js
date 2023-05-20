import React from 'react'

const LoginPage = () => {
    const signUp=()=>{
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    const signIn=()=>{
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
        }
  return (
<div className='LoginPage'>
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form action="#">
        <h1 className=''>Create Account</h1>
        
        <span className='Sign_in'>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className='M_Top'>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1 className='Sign_in'>Sign in</h1>
        
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password"  placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button className='M_Top'>Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn"  onClick={()=>signIn()}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" onClick={()=>signUp()}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
 
</div>
  )
}

export default LoginPage