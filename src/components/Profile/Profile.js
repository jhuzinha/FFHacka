import { ProfileContainer } from "./ProfileStyle";
import perfil from '../../Assets/images/perfil.png'
import { Link } from "react-router-dom";

export default function Profile({ width, setWidth, padding, setPadding }) {
    return (
        <ProfileContainer width={width} padding={padding}>
            <div>
                <Link to='/inicio'>
                    <img src={perfil} alt='perfil' />
                </Link>
                <p>Usuario</p>
            </div>
            {width !== '0px' ? <div className="back-black" onClick={() => {setWidth('0px'); setPadding('0px')}}></div> : <></>}
            <div>
                <h1>Minhas estatísticas</h1>
                <h1>Avaliações feitas</h1>
                <h1>Suporte</h1>
                <h1>Configurações</h1>
            </div>
        </ProfileContainer>
    )
}