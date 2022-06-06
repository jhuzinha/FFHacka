import { ProfileContainer } from "./ProfileStyle";
import perfil from '../../Assets/images/perfil.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import NameContext from "../../context/NameContext";

export default function Profile({ width, setWidth, padding, setPadding }) {
    const { nameUser } = useContext(NameContext)
    const navigate = useNavigate()

    return (
        <ProfileContainer width={width} padding={padding}>
            <div>
                <Link to='/inicio'>
                    <img src={perfil} alt='perfil' />
                </Link>
                <p>{nameUser}</p>
            </div>
            {width !== '0px' ? <div className="back-black" onClick={() => {setWidth('0px'); setPadding('0px')}}></div> : <></>}
            <div>
                <h1>Minhas estatísticas</h1>
                <h1>Avaliações feitas</h1>
                <h1 onClick={() => navigate('/suporte')}>Suporte</h1>
                <h1 onClick={() => navigate('/configuracao')}>Configurações</h1>
            </div>
        </ProfileContainer>
    )
}