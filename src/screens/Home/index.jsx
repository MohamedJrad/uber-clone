import React from 'react'
import { View, Text } from 'react-native'
import Map from '../../components/Map'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'
const index = () => {
    return (
        <View>
            <Map />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default index
