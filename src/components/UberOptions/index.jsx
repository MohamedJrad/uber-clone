import React from 'react'
import { View, Text, Pressable } from 'react-native'
import UberOption from '../UberOption'
import typesData from '../../../assets/data/types'
import types from '../../../assets/data/types'
import { Container, ConfirmButton, ConfirmButtonLabel } from './styles'
const index = () => {
    const confirm = () => {
        console.warn('confirm')
    }


    return (
        <Container>
            {
                types.map((e, i) => {
                    return <UberOption key={i} name={e.type} price={e.price} />
                })
            }
            <ConfirmButton onPress={confirm}>

                <ConfirmButtonLabel>
                    Confirm Uber
                </ConfirmButtonLabel>
            </ConfirmButton>

        </Container>
    )
}

export default index
