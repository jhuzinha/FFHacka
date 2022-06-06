import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emergency from "../Emergency/Emergency";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Maps from "../Maps/Maps";
import Message1 from "../Message/Message1";
import Register from "../Register/Register"
import Settings from "../Settings/Settings";
import SolicitSupport from "../SolicitSuport/SolicitSuport";
import Support from "../Support/Support";

export default function App () {

    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element = {  <Main />} />
                <Route path="/login" element = { < Login/> } />
                <Route path="/cadastro" element = { < Register /> } />
                <Route path="/mapa" element = { < Maps /> } />
                <Route path="/inicio" element = { < Home /> } />
                <Route path="/suporte" element = {<Support />} />
                <Route path="/mensagem1" element = {<Message1/>} />
                <Route path="/solicitacaosuporte" element = {<SolicitSupport/>} />
                <Route path="/configuracao" element = {<Settings/>} />
                <Route path="/emergencia" element = { < Emergency /> } />
            </Routes>
        </BrowserRouter>
    )

}