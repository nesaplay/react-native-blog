import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(Context)

  const post = state.find(post => post.id === id)

  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
