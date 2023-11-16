import { Link } from 'react-router-dom';
import './SignUp.css';
import ABI from './../abi.json';
import Web3 from 'web3';
import { useState } from 'react';

function SignUp(){
  const [userName,setUserName]=useState(null);
  const [userEmail,setUserEmail]=useState(null);
  const [userPassword,setUserPassword]=useState(null);
  const [userCPassword,setUserCPassword]=useState(null);
  const handleName=(e)=>{
    setUserName(e.target.value);
  }
  const handleEmail=(e)=>{
    setUserEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setUserPassword(e.target.value);
  }
  const handleConfirmPassword=(e)=>{
    setUserCPassword(e.target.value);
  }
  const web3 = new Web3(window.ethereum);
  const contractAddress="0xb7467b9A79Cd8174402E2BccA209Ed6374d97022";
  const contract=new web3.eth.Contract(ABI,contractAddress);



  const signUp=async(e)=>{
    e.preventDefault();
    
    const res=await fetch("http://localhost:3000/api/ethereum/sign-up",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({email:userEmail})
    });
    const data=await res.json();
    console.log(data);

    if(data.status===200){      
      
      const accounts=await window.ethereum.request({
      method:"eth_requestAccounts"
      })
      const account=await accounts[0]
      

      if(contract && contract.methods){
          await contract.methods 
          .signUp(userName,userEmail,userPassword,userCPassword)
          .send({from:account})
          alert("Account is created")
      }
      else{
          alert("sorry,try again later")
      }
      }
  }
    
    
    return(
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
  <div className="form-box register">
    <form onSubmit={signUp}>
      <h2>Sign Up</h2>
      <div className="input-box">
        <span className="icons"><i className='bx bxs-user'></i></span>
        <input type="text" placeholder="Name" onChange={handleName}/>
        <label htmlFor=""></label>
      </div>

      <div className="input-box">
        <span className="icons"><i className='bx bxs-envelope'></i></span>
        <input type="email" required placeholder="Email" onChange={handleEmail}/>
        <label htmlFor=""></label>
      </div>
      <div className="input-box">
        <span className="icons"><i className='bx bxs-lock'></i></span>
        <input type="password" required placeholder="Password" onChange={handlePassword}/>
        <label htmlFor=""> </label>
      </div>
      <div className="input-box">
        <span className="icons"><i className='bx bxs-lock'></i></span>
        <input type="password" required placeholder="Confirm Password" onChange={handleConfirmPassword}/>
        <label htmlFor=""> </label>
      </div>
      <div className ="remember-forget">
        <label><input type="checkbox"/>
        I agree to term & conditions </label>
      </div>
      <button type="submit" className="btn">Sign Up</button>
      <div className="login-register">
        <p>Already have an account?&nbsp;
          <Link to="/" className="login-link">Sign In</Link></p>
      </div>
      </form>
      </div>
  

</div>
</div>
</>
  )
}
export default SignUp




