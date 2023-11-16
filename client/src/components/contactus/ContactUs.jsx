import { useRef } from 'react'
import './ContactUs.css'
function ContactUs(){
  
  const userName=useRef(null);
  const userEmail=useRef(null);
  const userNumber=useRef(null);
  

  const dataHandle=(e)=>{
    e.preventDefault();
    const Name=userName.current.value;
    const Email=userEmail.current.value;
    const Number=userNumber.current.value;
    console.log("name: ",Name,"email: ",Email,"number: ",Number);
  }

  return(
  <> 
    <table border='5' align="center" width="100%" background color-lightskyblue>
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="heading">CONTACT US</div>
               <p className="outlet">Welcome Come My Resto
               <br/>
               </p>
               <span>Name : <input type="text" className="form-control" placeholder="Name" aria-label="default input example" ref={userName}/></span><br/>
               <span>Email Id : <input type="email" className="form-control" placeholder="Email" aria-label="default input example" ref={userEmail}/></span><br/>
               <span>Contact Number : <input type="number" className="form-control" placeholder="Phone" aria-label="default input example" ref={userNumber}/></span><br/>
            
               <button id="contact-btn" onClick={dataHandle}>Send Message</button>
            </div>
            <div className="col-md-5" id="col">
               <h1>Info</h1>
               <p><i className="fa-regular fa-envelope"></i>SpiceOfSlice@gmail.com</p>
               <p><i className="fa-solid fa-phone"></i>+91 204 576 2949</p>
               <p><i className="fa-solid fa-building-columns"></i> Authority</p>
               <p>Have a Good Day</p>
            </div>
        </div>
      </div>
      </section> 
  </table>
  </>
  )
}

export default ContactUs