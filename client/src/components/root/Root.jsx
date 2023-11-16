import { Outlet } from "react-router-dom";
import Footer from './../footer/Footer';
import Header from "../header/Header";
import Home from '../home/Home';
function Root(){
    return(
        <>
        <Home/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Root