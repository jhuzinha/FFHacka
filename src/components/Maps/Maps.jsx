import { GoogleMap, useLoadScript, Marker, Circle, BicyclingLayer } from '@react-google-maps/api';
import { MapsContainer, PerfilToggle, ProfileContainer } from './MapsStyle';
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile';
import { useState } from 'react';
import perfil from '../../Assets/images/perfil.png'

const libraries = ["places"];

export default function Maps() {
    const [padding, setPadding] = useState('0px')
    const [width, setWidth] = useState('0px')

    const google = window.google;
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDxOp-T-nicDeH6LoHvbHYyNa1Mjj56_VQ",
        libraries,
    })
    const Blayer = bicyclingLayer => {
        console.log('bicyclingLayer: ', bicyclingLayer)
    }


    const position = {
        lat: -23.5489,
        lng: -46.6370,
    }

    return (
        <MapsContainer>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={15}
                >
                    <div style={{ width: '30px', height: '30px' }}>
                        <Marker position={{
                            lat: -23.5489,
                            lng: -46.6370,
                        }} options={{
                            label: {
                                text: 'Estacionamento',
                                className: 'marker'
                            },
                            icon: {
                                url: 'https://www.shareicon.net/data/512x512/2015/11/03/666405_sign_512x512.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5589,
                            lng: -46.6200,
                        }} options={{
                            label: {
                                text: 'Estacionamento',
                                className: 'marker'
                            },
                            icon: {
                                url: 'https://www.shareicon.net/data/512x512/2015/11/03/666405_sign_512x512.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5469,
                            lng: -46.6390,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5569,
                            lng: -46.6290,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5669,
                            lng: -46.6390,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5679,
                            lng: -46.6490,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                         <Marker position={{
                            lat: -23.5669,
                            lng: -46.6390,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                        <Marker position={{
                            lat: -23.5769,
                            lng: -46.6370,
                        }} options={{
                            label: {
                                text: 'Manutençao',
                                className: 'marker'
                            },
                            icon: {
                                url: 'http://cdn.onlinewebfonts.com/svg/img_489430.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />

                        <Marker position={{
                            lat: -23.5569,
                            lng: -46.6230,
                        }} options={{
                            label: {
                                text: 'Estacionamento',
                                className: 'marker'
                            },
                            icon: {
                                url: 'https://www.shareicon.net/data/512x512/2015/11/03/666405_sign_512x512.png',
                                scaledSize: new google.maps.Size(25, 25)

                            }
                        }} />
                    </div>

                    <BicyclingLayer
                        onLoad={Blayer}
                    />
                    <Circle center={{
                        lat: -35.003000,
                        lng: -60.003000
                    }} options={{
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        clickable: false,
                        draggable: false,
                        editable: false,
                        visible: true,
                        radius: 100,
                        zIndex: 1
                    }}>

                    </Circle>
                </GoogleMap>
            ) : ''}
            <ProfileContainer>
                <Profile width={width} setWidth={setWidth} padding={padding} setPadding={setPadding} />
            </ProfileContainer>
            <PerfilToggle onClick={() => {setWidth('360px'); setPadding('32px');}}>
                <img src={perfil} alt="perfil" />
            </PerfilToggle>
            <Footer  />
        </MapsContainer>
    )
}
