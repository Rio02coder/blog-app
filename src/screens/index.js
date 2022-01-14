import React, {useContext} from 'react'
import {View, StyleSheet, Text, FlatList, Button} from 'react-native'
import {Context} from '../context/blogContext'

const indexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={(item) => {return item.title}}
                renderItem={({item}) => {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default indexScreen