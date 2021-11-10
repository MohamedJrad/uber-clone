import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import DestinationSearch from './screens/DestinationSearch'
import SearchResult from './screens/SearchResult'
//import Places from './components/GooglePlacesInput'
export default function App() {
    return (
        <View  >
            <StatusBar style="auto" />


            <Home />


        </View>
    );
}

