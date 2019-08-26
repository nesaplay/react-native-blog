import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(Context)

  const post = state.find(post => post.id === id)

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <FontAwesome name='pencil' size={30} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})

export default ShowScreen
