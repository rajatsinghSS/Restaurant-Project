//import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contactus/ContactUs'
import Gallary from './components/gallary/Gallary';
import Root from './components/root/Root';
import Error from './components/root/Error';

const router=createBrowserRouter([
  {path:"",element:<Root/>,
  errorElement:<Error/>,
  children:[{path:"/AboutUs",element:<AboutUs/>},
  {path:"/ContactUs",element:<ContactUs/>},
  {path:"/Gallary",element:<Gallary/>},
  {path:"/",element:<Login/>},
  {path:"/SignUp",element:<SignUp/>}]
  }
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  
  )
}

export default App
