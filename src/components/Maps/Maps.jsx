import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api'
import { MapsContainer } from './MapsStyle'
import Footer from '../Footer/Footer'

export default function Maps() {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDxOp-T-nicDeH6LoHvbHYyNa1Mjj56_VQ"
    })

    const position = {
        lat: -35.000000,
        lng: -60.000000
    }

    return (
        <MapsContainer>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={15}
                >
                    <Marker position={position} options={{
                        label: {
                            text: 'teste',
                            className: 'marker'
                        },
                        icon: {
                            url: 'https://www.shareicon.net/data/512x512/2015/11/03/666405_sign_512x512.png',
                            size: {
                                height: 10,
                                width: 10
                            }
                            // scaledSize: new google.maps.Size(25, 25)
                        }
                    }} />

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
            <Footer />
        </MapsContainer>
    )
}