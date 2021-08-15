import React from 'react';
import { Container, Text, LearMore, Title } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Container, InputBox, InputText, TimeContainer } from './styles'

const Index = () => {
  return <Container>
    {/*Input Box*/}
    <InputBox>
      <InputText>
        Where To?
      </InputText>
      <TimeContainer >

        <AntDesign name={"clockcircle"} size={16} />
        <Text>Now</Text>
        <MaterialIcons name={"keyboard-arrow-down"} size={16} />
      </TimeContainer>

    </InputBox>
    {/*Previous destination*/}
    {/*Home destination*/}

  </Container>
}

export default Index;