import { Buttons, CloseYou, HomeContainer, Carousel } from "./homeStyle.jsx";
import { IoChevronForward, IoHeartSharp, IoHeartOutline, IoSearchOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search/Search.js";
 
export default function Home() {
    const [width, setWidth] = useState('0%')
    const [display, setDisplay] = useState('none')

    return (
        <>
            <HomeContainer>
                <figure>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <IoSearchOutline fontSize={30} cursor='pointer' onClick={() => {setWidth('100%'); setDisplay('initial');}} />
                        </div>
                    </div>
                    <h1>Ola, fulano </h1>
                    <p>Onde vamos pedalar hoje? </p>
                </figure>

                <Buttons>
                    <button>Encontrar pontos de apoio</button>
                    <Link to='/mapa'>
                        <button>Abrir Mapa</button>
                    </Link>
                    <button className="emergency">Emergencia</button>
                </Buttons>

                <CloseYou>
                    <div>
                        <h2>Perto de voce</h2>
                        <div>
                            <h3>Navegar no mapa</h3>
                            <IoChevronForward />
                        </div>
                    </div>
                </CloseYou>

                <Carousel>
                    <div>
                        <img src="" alt="" />
                        <button>Distancia <span>15 m</span></button>
                        <h4>Estacionamento Parkbike</h4>
                        <div className="avaliation">
                            <h4>234 Avaliações</h4>
                            <div>
                                <IoHeartSharp color='#000' fontSize={18}  />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartOutline color='#000' fontSize={18} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <button>Distancia <span>15 m</span></button>
                        <h4>Estacionamento Parkbike</h4>
                        <div className="avaliation">
                            <h4>234 Avaliações</h4>
                            <div>
                                <IoHeartSharp color='#000' fontSize={18}  />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartOutline color='#000' fontSize={18} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <button>Distancia <span>15 m</span></button>
                        <h4>Estacionamento Parkbike</h4>
                        <div className="avaliation">
                            <h4>234 Avaliações</h4>
                            <div>
                                <IoHeartSharp color='#000' fontSize={18}  />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartSharp color='#000' fontSize={18} />
                                <IoHeartOutline color='#000' fontSize={18} />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </HomeContainer>
            <Search width={width} display={display} />
        </>
    )
}