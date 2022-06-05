import { RegisterContainer, Forms} from "../Register/registerStyle"
import { useState } from "react";
import logo from "../../Assets/images/Logo.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatPassword] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <RegisterContainer> 
            <header>
                <img src={logo} alt="BCycle" /> 
            </header> 
            <Forms onSubmit={sendEmail}>
                <label> E-mail <input placeholder="Digite seu email" type="email" name="" value={email} id="" onChange={(event) => setEmail(event.target.value)} /> </label>
                <label> Senha <input placeholder="Informe sua senha" type="password" name='' value={password} id="" onChange={(event) => setPassword(event.target.value)} /> </label>
                <label> Confirme sua senha <input placeholder="Informe sua senha novamente" type="repeatpassword" name='' value={repeatpassword} id="" onChange={(event) => setRepeatPassword(event.target.value)} /> </label>
                <div>
                    <button type="submit"> Confirmar cadastro </button>
                </div>
            </Forms>
        </RegisterContainer>
    )

}