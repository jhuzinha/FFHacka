import { LoginContainer, Forms } from "./loginStyle";
import { useState } from "react";
import logo from "../../Assets/images/Logo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <LoginContainer>
            <header>
                <img src={logo} alt="BCycle" /> 
            </header> 
            <Forms>
                <label> E-mail <input placeholder="Digite seu email" type="email" name="" value={email} id="" onChange={(event) => setEmail(event.target.value)} /> </label>
                <label> Senha <input placeholder="Informe sua senha" type="password" name='' value={password} id="" onChange={(event) => setPassword(event.target.setPassword)} /> </label>
               
                <div>
                    <button type="submit"> Entrar </button>
                    <p> Recuperar a senha </p>
                </div>
            </Forms>
        </LoginContainer>

    )
}