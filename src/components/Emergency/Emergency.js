import { EmergencyContainer } from "./EmercencyStyle";
import { IoArrowBack } from 'react-icons/io5'
import { Link } from "react-router-dom";

export default function Emergency() {
    return (
        <EmergencyContainer>
            <div>
                <Link to='/mapa'>
                    <IoArrowBack cursor='pointer' />
                </Link>
                <h1>Números de emergência</h1>
            </div>
            <div className="content"></div>
            <div className="sugestions">
                <button>192 - SAMU.</button>
                <button>197 - Polícia Civil.</button>
                <button>190 - Polícia Militar.</button>
                <button>193 - Corpo de Bombeiros</button>
            </div>
        </EmergencyContainer>
    )
}