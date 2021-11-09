import React from 'react';
import { Container, StyledMapView } from './styles';

import { Direction_API } from '@env'

import MapViewDirections from 'react-native-maps-directions'
const Map = () => {


  const origin = { latitude: 28.450627, longitude: -16.263045 };
  const destination = { latitude: 28.460127, longitude: -16.269045 };


  return (
    <Container>
      <StyledMapView

        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >

        <MapViewDirections
          lineDashPattern={[1]}
          origin={origin}
          destination={destination}
          apikey={Direction_API}
          strokeWidth={5}
          strokeColor="black"
        />
        <StyledMapView.Marker coordinate={origin} />
        <StyledMapView.Marker coordinate={destination} />
      </StyledMapView>
    </Container>)

}

export default Map;

