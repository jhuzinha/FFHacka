import { RegisterContainer, Forms, Head} from "../Register/registerStyle"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("")
    const navigate = useNavigate();

    function  fazerRegistro(event) {
        event.preventDefault();
        navigate("/login")
    }
    
    return (
        <RegisterContainer> 
            <Head>
                <div></div>
                <p> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/login"> Login </Link> </p> 
                <h1>   Cadastro  </h1>
            </Head> 
            <Forms onSubmit={(e) => fazerRegistro(e)}>
                <label> Nome <input placeholder="Digite seu nome" type="name" name="nome" required value={name} id="" onChange={(event) => setName(event.target.value)} /> </label>
                <label> E-mail <input placeholder="Digite seu email" type="email" name="email" required value={email} id="" onChange={(event) => setEmail(event.target.value)} /> </label>
                <label> Senha <input placeholder="Informe sua senha" type="password" name='password' required value={password} id="" onChange={(event) => setPassword(event.target.value)} /> </label>
                <button type="submit"> Confirmar cadastro </button>
            </Forms>
        </RegisterContainer>
    )

}