import { LoginContainer, Forms, Head } from "./loginStyle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function  fazerLogin(event) {
        event.preventDefault();
        navigate("/home")
    }
    return (
        <LoginContainer>
            <Head>
                <div></div>
                <h1> Login </h1> 
                <p> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/cadastro">  Cadastro  </Link></p>
            </Head> 

            <Forms onSubmit={fazerLogin} >
                <label> E-mail <input placeholder="Digite seu email" type="email" value={email}  required id="email" onChange={(event) => setEmail(event.target.value)} /> </label>
                <label> Senha <input placeholder="Informe sua senha" type="password"  value={password} required id="password" onChange={(event) => setPassword(event.target.value)} /> </label>
               
                <div>
                    <button type="submit"> Entrar </button>
                    <p> Recuperar a senha </p>
                </div>
            </Forms>
        </LoginContainer>

    )
}