import React from 'react';
import { Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { InputBox, InputText, TimeContainer, DestinationText, IconContainer, BlueIconContainer, Row } from './styles'

const Index = () => {
  return <>
    {/*Input Box*/}
    <InputBox>
      <InputText>
        Where To?
      </InputText>
      <TimeContainer >

        <AntDesign name={"clockcircle"} size={16} color={'#535353'} />
        <Text>Now</Text>
        <MaterialIcons name={"keyboard-arrow-down"} size={16} />
      </TimeContainer>

    </InputBox>
    {/*Previous destination*/}
    <Row>

      <IconContainer>
        <AntDesign name={"clockcircle"} size={16} color={'#e7e4e4'} />

      </IconContainer>
      <DestinationText>
        Spin Night Club
      </DestinationText>
    </Row>
    {/*Home destination*/}
    <Row>

      <BlueIconContainer>
        <Entypo name={"home"} size={16} color={'#e7e4e4'} />

      </BlueIconContainer>
      <DestinationText>
        Spin Night Club
      </DestinationText>
    </Row>
  </>
}

export default Index;