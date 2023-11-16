import { Link } from 'react-router-dom';
import './Login.css';
import { useRef, useState } from 'react';

function Login() {


  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const signIn=async(e)=>{
    e.preventDefault();
    const email=emailRef.current.value;
    const pass=passwordRef.current.value;
    
    const res=await fetch("http://localhost:3000/api/ethereum/sign-in",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({email:email,password:pass})
    });
    const data=await res.json();
    alert("Welcome!"+" "+data.message);
    if(data.staus===200){
      const userName=data.message;
    }
  }



  return (
      <>
<div className="background"> <img src="src/assets/background.jpg" alt=""/></div>



<div className="container">
  <img src="src/assets/background.jpg" alt=""/>
    <div className="content">
      <h2 className="logo"><i className='bx bxs-bowl-hot'></i>SpiceOfSlices</h2>
     <div className="text-sci">
         <h2>Welcome!<br/><span>Enjoy the experince of SpiceOfSlices</span></h2>
         <p>Lorem ipsum dolor sit amet.<br/>
          Soluta, at explicabo. Explicabo?</p>
      
       <div className="social-icons">
        <a href="#"><i className='bx bxl-linkedin'></i></a>
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
       </div>
      </div>
    </div>
    <div className="logreg-box">
     <div className="form-box login">
      <form action="#">
       <h2>Sign In</h2>
       <div className="input-box">
         <span className="icons"><i className='bx bxs-envelope'></i></span>
         <input type="email" required placeholder="Email" ref={emailRef}/>
         <label htmlFor=""></label>
       </div>

       <div className="input-box">
        <span className="icons"><i className='bx bxs-lock'></i></span>
        <input type="password" required placeholder="Password" ref={passwordRef}/>
        <label htmlFor=""></label>
       </div>

       <div className="remember-forget">
        <label><input type="checkbox"/>Remember me 
        </label>
       </div>
       <button type="submit" className="btn" onClick={signIn}>Sign In</button>
       <div className="login-register">
        <p>Don't have an account?<Link to="/SignUp" className="register-link">Sign up</Link></p>
       </div>
      </form>
     </div>
 
    </div>
</div>
</>
  )
}
export default Login




