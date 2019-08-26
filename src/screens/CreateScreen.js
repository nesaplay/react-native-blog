import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { actions } = useContext(Context)

  return (
      <BlogPostForm 
        onSubmit={(title, content) => {
          actions.addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
