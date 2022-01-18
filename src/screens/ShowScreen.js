import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const showScreen = ({navigation}) => {
    const name = navigation.getParam('name')
    return (
        <View>
            <Text>Show Screen</Text>
            <Text>{name}</Text>
        </View>
    )
}

export default showScreen