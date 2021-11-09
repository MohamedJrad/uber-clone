import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Map from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'
const index = () => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <Map />
            </View>

            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default index
