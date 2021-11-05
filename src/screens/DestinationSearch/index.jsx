import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView, FlatList, StyleSheet } from 'react-native'
// import { TextInput, Container } from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PLACES_API } from '@env'

const index = () => {
    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)


    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results')
        }

    }, [originPlace, destinationPlace])
    return (
        <SafeAreaView>
            < View style={styles.container} >


                <GooglePlacesAutocomplete

                    placeholder='Where From ?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })

                    }}
                    query={{
                        key: PLACES_API,
                        language: 'en',
                    }}
                    styles={{
                        container: styles.TextInput
                    }}
                />
                <GooglePlacesAutocomplete

                    placeholder='Where to ?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })

                    }}
                    query={{
                        key: PLACES_API,
                        language: 'en',
                    }}
                    styles={{
                        container: styles.TextInput
                    }}
                />




            </View>

        </SafeAreaView>

    )
}

export default index


const styles = StyleSheet.create({
    container: {
        padding: 10,
        // marginTop: '30px',
        height: '100%',


    },
    TextInput: {
        padding: 5,
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
    }
})