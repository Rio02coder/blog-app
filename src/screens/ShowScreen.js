import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const showScreen = ({navigation}) => {
    const name = navigation.getParam('name')
    const text = navigation.getParam('text')
    return (
        <View>
            <Text>{name}</Text>
            <Text>{text}</Text>
        </View>
    )
}

export default showScreen