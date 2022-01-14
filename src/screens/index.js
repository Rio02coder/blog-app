import React, {useContext} from 'react'
import {View, StyleSheet, Text, FlatList, Button} from 'react-native'
import blogContext from '../context/blogContext'

const indexScreen = () => {
    const {posts, addBlogPost} = useContext(blogContext)
    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList 
                data={posts}
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