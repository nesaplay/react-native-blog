import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext)

  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList 
        data={blogPosts} 
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => <Text>{item.title}</Text>}  
      />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default IndexScreen
