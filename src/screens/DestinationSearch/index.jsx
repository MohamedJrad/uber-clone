import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import { TextInput, Container } from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const index = () => {
    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)


    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [originPlace, destinationPlace])
    return (
        <SafeAreaView>
            < View style={styles.container} >


                <GooglePlacesAutocomplete

                    placeholder='Where From ?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })

                    }}
                    query={{
                        key: 'AIzaSyC6fEsAiXGzr4_4qOrjspMxYoj8Uyliwuw',
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
                        key: 'AIzaSyC6fEsAiXGzr4_4qOrjspMxYoj8Uyliwuw',
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
        padding: '10px',
        marginTop: '30px',
        height: '100%',


    },
    TextInput: {
        padding: 5,
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
    }
})