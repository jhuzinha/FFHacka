import { Link, useNavigate } from "react-router-dom";
import { SupportContainer, Head, Forms } from "./suportStyle";
import { useState } from "react";
import { BsArrowLeft } from 'react-icons/bs'


export default function Support() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messager, setMessager] = useState("");
    const dados = {
        name,
        email, 
        messager
    }
    const navigate = useNavigate();

    function enviarMensagem(event) {
        event.preventDefault();
        navigate("/mensagem1", {state: {dados: dados}})
    }

    return (
        <>
            <SupportContainer>
                <Head>
                    <div></div>
                    <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/perfil"><h1><BsArrowLeft /> Suporte </h1> </Link>
                </Head>
                
                <Forms onSubmit={(e) => enviarMensagem(e)}>
                    <label> Nome <input placeholder="Digite seu nome" type="name" name="nome" required value={name} id="" onChange={(event) => setName(event.target.value)} /> </label>
                    <label> E-mail <input placeholder="Digite seu email" type="email" name="email" required value={email} id="" onChange={(event) => setEmail(event.target.value)} /> </label>
                    <label> Sua mensagem <textarea placeholder="Mensagem" type="text" name='text' required value={messager} id="" onChange={(event) => setMessager(event.target.value)} /> </label>
                    <div><button type="submit"> Enviar </button></div>
                </Forms>
                <p> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/solicitacaosuporte"> Ver solicitaçoes de suporte </Link></p>
            </SupportContainer>
        </>
    )
}