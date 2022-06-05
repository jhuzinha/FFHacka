import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Maps from "../Maps/Maps";
import Register from "../Register/Register"

export default function App () {

    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element = {  <Main />} />
                <Route path="/login" element = { < Login/> } />
                <Route path="/cadastro" element = { < Register /> } />
                <Route path="/mapa" element = { < Maps /> } />
                <Route path="/inicio" element = { < Home /> } />
            </Routes>
        </BrowserRouter>
    )

}