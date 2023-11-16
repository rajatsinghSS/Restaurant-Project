import './Home.css'
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
            <div className="nav">
             <p><Link to="/AboutUs">AboutUs</Link></p>
             <p><Link to="/ContactUs">contactus</Link></p>
             <p><Link to="/Gallary">gallary</Link></p>
             <p><Link to="/SignUp">Sign up</Link></p>
             <p><Link to="/">login</Link></p>
        </div>
            
        </>
    )
}
export default Home