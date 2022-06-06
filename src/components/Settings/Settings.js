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
                    <p> 41 9 9213-2086 </p>
                    <div></div>
                    <p> Endereço favorito </p>
                    <p> São Francisco </p>
                    <div></div>
                    <p> Idioma </p>
                    <p> PT-BR </p>
                    <div></div>
                </Informs>


            </ContainerSettings>

        </>
    )
}