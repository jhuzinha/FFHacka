import { RegisterContainer, Forms, Head} from "../Register/registerStyle"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NameContext from "../../context/NameContext";


export default function Register () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setNameUser } = useContext(NameContext)

    function  fazerRegistro(event) {
        event.preventDefault();
        setNameUser(name)
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
                <div><button type="submit"> Confirmar cadastro </button></div>
            </Forms>
        </RegisterContainer>
    )

}