import { AiOutlineCompass } from 'react-icons/ai'
import { Foot, PlaceSelected, Emergency } from './footer.jsx'
import { BiLockOpenAlt } from 'react-icons/bi'
import { FaWrench } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [place, setPlace] = useState(false)
    const [emergency, setEmercency] = useState(false)

    return (
        <>
            {place ? (
                <PlaceSelected>
                    <div className='place'>
                        <img src='' alt='' />
                        <div>
                            <h1>Estacionamento Parkbike</h1>
                            <h1>Distância <span>150 m</span></h1>
                            <div className='info'>
                                <div>
                                    <h2>Por 30 min</h2>
                                    <h3>R$ 4,50</h3>
                                </div>
                                <div>
                                    <h2>Chegada em</h2>
                                    <h3>8 min</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='suports'>
                        <p>Tomada</p>
                        <p>Wifi</p>
                        <p>Estação de manutenção</p>
                    </div>
                    <button>Iniciar rota</button>
                </PlaceSelected>
            ) : <></>}

            {emergency ? (
                <Emergency>
                    <div>
                        <Link to='/inicio'>
                            <button>Bike Quebrou :(</button>
                        </Link>
                        <Link to='/emergencia'>
                            <button className='emergency'>Emergência</button>
                        </Link>
                    </div>
                </Emergency>
            ) : <></>}

            <Foot place={place} emergency={emergency}>
                <div onClick={() => setPlace(!place)}>
                    <AiOutlineCompass />
                    <div className='place-icon'></div>
                </div>
                <div>
                    <BiLockOpenAlt />
                    <div></div>
                </div>
                <div onClick={() => setEmercency(!emergency)}>
                    <FaWrench />
                    <div className='emergency-icon'></div>
                </div>
            </Foot>
        </>
    )
}



