import { Head, ContainerSettings, Informs } from "./settingStyle";
import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';

export default function Settings() {
    return (
        <>
            <ContainerSettings>
                <Head>
                    <div></div>
                    <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/perfil"><h1><BsArrowLeft /> Configuração </h1> </Link>
                </Head>
                <Informs>
                    <p> Numero de celular </p>
                    <h5> 41 9 9213-2086 </h5>
                    <div></div>
                    <p> Endereço favorito </p>
                    <h5> São Francisco </h5>
                    <div></div>
                    <p> Idioma </p>
                    <h5> PT-BR </h5>
                    <div></div>
                </Informs>


            </ContainerSettings>

        </>
    )
}