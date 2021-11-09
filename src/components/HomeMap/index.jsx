import React from 'react';
import { Container, StyledMapView, MarkerImage } from './styles';
import { Marker } from 'react-native-maps';
import cars from '../../../assets/data/cars'
const Map = () => {
  const getImage = (name) => {
    if (name === 'UberX') {
      return require('../../../assets/images/top-UberX.png')
    }
    if (name === 'UberXL') {
      return require('../../../assets/images/top-UberXL.png')
    }
    return require('../../../assets/images/top-Comfort.png')
  }

  return (
    <Container>
      <StyledMapView

        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >

        {cars.map((car) => {
          return <Marker
            key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}

          >
            <MarkerImage style={{ resizeMode: 'contain' }} source={getImage(car.type)} />

          </Marker>
        })
        }



      </StyledMapView>
    </Container>)

}

export default Map;

