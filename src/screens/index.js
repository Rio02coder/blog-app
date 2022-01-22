import React, {useContext} from 'react'
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/blogContext'
import { Feather } from '@expo/vector-icons'

const indexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(item) => {return item.title}}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {
                                'name': item.title,
                                'text': item.content
                            })}>
                                <Text style={styles.title}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name='trash' style={styles.icon}/>
                            </TouchableOpacity> 
                        </View>
                    )
                }}
            />
        </View>
    )
}

indexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('create')}>
                <Feather name = "plus" size={30} />
            </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default indexScreen