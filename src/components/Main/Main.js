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
                    <button> <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/cadastro"> Começar </Link></button>
                    <p> Já tem uma conta? <span> <Link to={"/login"}> Entrar </Link></span> </p>
                </Buttons>
            </MainContainer>

        </>

    )
}