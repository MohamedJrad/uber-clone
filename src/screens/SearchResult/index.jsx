import React from 'react'
import Map from '../../components/RouteMap '
import UberOptions from '../../components/UberOptions'
import { MapContainer, Container } from './styles.js'
const index = () => {
    return (
        <Container >
            <MapContainer>
                <Map />
            </MapContainer>
            <UberOptions />

        </Container>


    )
}

export default index
