import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = () => async (title, content, cb) => {
  await jsonServer.post('/blogposts', { title, content })

  cb && cb()
}

const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`/blogposts/${id}`)

  dispatch({ type: 'delete_blogpost', payload: id })
}

const editBlogPost = dispatch => async (id, title, content, cb) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content })
  
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
  cb && cb()
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'delete_blogpost':
      return state.filter(post => post.id !== action.payload)
    case 'edit_blogpost':
      return state.map(post => {
        if (post.id === action.payload.id) {
          return ({
            ...post,
            title: action.payload.title,
            content: action.payload.content,
          })
        }
        return post
      })
    default:
      return state
  }
}

export const { Context, Provider } = createDataContext({
  reducer: blogReducer,
  actions: { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  initialState: [],
})
