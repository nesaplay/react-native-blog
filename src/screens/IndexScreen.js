import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, actions } = useContext(BlogContext)
  console.log({state})
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList 
        data={state} 
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => <Text>{item.title}</Text>}  
      />
    <Button title="Add a blog post" onPress={actions.addBlogPost}  />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default IndexScreen
