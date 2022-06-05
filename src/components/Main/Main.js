import { MainContainer, Buttons } from "./mainStyle.jsx";
import logo from "../../Assets/images/Logo.png";
import gradient from "../../Assets/images/Gradient.png"
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <MainContainer>
                <figure>
                    <img src={gradient} alt="" />
                </figure>
                <img src={logo} alt="BCycle" />
                <Buttons>
                    <button> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to=""> Encontrar parceiros </Link></button>
                    <button> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/login">  Acessar rotas </Link></button>
                    <div> <Link style={{ textDecoration: 'none', color: '#2347FF' }} to="/cadastro">  Fazer cadastro  </Link></div>
                </Buttons>
            </MainContainer>

        </>

    )
}