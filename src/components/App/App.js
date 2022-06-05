import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Register from "../Register/Register"
import  Footer from "../Footer/Footer";

export default function App () {

    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element = {  <Main />} />
                <Route path="/login" element = { < Login/> } />
                <Route path="/cadastro" element = { < Register /> } />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )

}