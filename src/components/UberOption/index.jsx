import React from 'react'
import { Container, ImageContainer, Image, MiddleContainer, Name, Price, RightContainer, Time } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const index = ({ name, price }) => {


    const getImage = () => {
        if (name === 'UberX') {
            return require('../../../assets/images/UberX.jpeg')
        }
        if (name === 'UberXL') {
            return require('../../../assets/images/UberXL.jpeg')
        }
        return require('../../../assets/images/Comfort.jpeg')
    }
    return (
        <Container>
            <ImageContainer>
                <Image source={getImage()} />
            </ImageContainer>

            <MiddleContainer>
                <Name>
                    {name}{' '}
                    <Ionicons name="person" size={16} />
                    {' '}
                    3
                </Name>
                <Time>
                    8:03PM drop off
                </Time>

            </MiddleContainer>
            <RightContainer>
                <Ionicons name="pricetag" size={12} color={'#42d742'} />
                <Price>est. ${price}</Price>
            </RightContainer>

        </Container>
    )
}

export default index