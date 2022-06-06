import {SolicitContainer, Head, Menssage} from "./solictStyle";
import { Link } from "react-router-dom";
import { FiMail } from 'react-icons/fi'

export default function SolicitSupport() {
    return (
        <>
            <SolicitContainer>
                <Head>
                    <div></div>
                    <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/perfil"><h1> Solicitações de Suporte </h1> </Link>
                </Head>
                <Menssage>
                    <div> <FiMail color="rgba(82, 110, 255, 1)" /> <p> 05 Junho </p> </div>
                    Preciso de ajuda com ....
                </Menssage>
                <Menssage>
                    <div> <FiMail color="rgba(82, 110, 255, 1)" /> <p> 30 Maio </p> </div>
                    Preciso de ajuda com ....
                </Menssage>
                <Menssage>
                    <div> <FiMail color="rgba(82, 110, 255, 1)" /> <p> 19 Fevereiro </p> </div>
                    Preciso de ajuda com ....
                </Menssage>
            </SolicitContainer>
        </>
    )

}