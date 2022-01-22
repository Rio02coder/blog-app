import React, {useState, useContext} from "react";
import {View, Text, TextInput, StyleSheet, Dimensions, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Context } from "../context/blogContext";

const createScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [text, setText] = useState('')
    const {addBlogPost} = useContext(Context)
    return (
        <View>
            <Text> Enter Title: </Text>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <View style={styles.backgroudStyle}>
                    <TextInput 
                    placeholder="Title"
                    value={term}
                    onChangeText={(term) => setTerm(term)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInputStyle}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Text> Enter Content: </Text>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <View style={styles.backgroudStyle2}>
                    <TextInput 
                    placeholder="Text"
                    value={text}
                    onChangeText={(term) => setText(term)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInputStyle}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Button title="add post" onPress={() => addBlogPost(term, text, () => {
                navigation.navigate('Index')
            })}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroudStyle: {
        backgroundColor: 'rgb(230,227,227)',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    backgroudStyle2: {
        backgroundColor: 'rgb(230,227,227)',
        height: 250,
        width: Dimensions.get('window').width,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    textInputStyle: {
        flex: 1,
        marginLeft: 7,
        fontSize: 18
    },
})

export default createScreen