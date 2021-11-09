import styled from 'styled-components/native'

export const Container = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
width: 100%;

`
export const ImageContainer = styled.View`
height: 70px;
width: 80px;
border: 1px;
border-color: black;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`

export const Image = styled.Image`

height:70%;
width:100%;
/* object-fit: contain; */



`
export const MiddleContainer = styled.View`
display: flex;
justify-content: space-between;
margin-left: 10px;
margin-right: 10px;

`
export const RightContainer = styled.View`
width:100px;
display: flex;
flex-direction:row;
align-items: center;



`


export const Name = styled.Text`
font-weight: bold;
font-size: 18px;
margin-bottom: 5px;

`
export const Time = styled.Text`
color: #5d5d5d;

`
export const Price = styled.Text`

font-weight: bold;
font-size: 18px;
margin-left: 5px;
`

