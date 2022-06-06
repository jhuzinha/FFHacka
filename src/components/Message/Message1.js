import {ContainerMessage, Head, Message} from "./messageStyle";
import { Link, useLocation } from "react-router-dom";


export default function Message1(){
    const location = useLocation();
    console.log(location)
    return(
        <ContainerMessage>
            <Head>
                <div></div>
                <Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/perfil"><h1> Mensagem </h1> </Link>
            </Head>
            <Message> 
                <h6> {location.state.dados.name} </h6>
                {location.state.dados.messager}
                <p>12:50</p>
            </Message>

        </ContainerMessage>
    )
        
}