import createDataContext from './createDataContext'

const addBlogPost = dispatch => (title, content, cb) => {
  dispatch({ type: 'add_blogpost', payload: { title, content } })
  cb && cb()
}

const deleteBlogPost = dispatch => id => {
  dispatch({ type: 'delete_blogpost', payload: id })
}

const editBlogPost = dispatch => (id, title, content, cb) => {
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
  cb && cb()
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }]
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
  actions: { addBlogPost, deleteBlogPost, editBlogPost },
  initialState: [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
})
