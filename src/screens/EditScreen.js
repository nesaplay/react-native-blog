import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, actions } = useContext(Context)

  const post = state.find(post => post.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: post.title, content: post.content }}
      onSubmit={(title, content) => {
        actions.editBlogPost(id, title, content, () => {
          navigation.pop()
        })
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
