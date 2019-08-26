import createDataContext from './createDataContext'

const addBlogPost = dispatch => (title, content, cb) => {
  dispatch({ type: 'add_blogpost', payload: { title, content } })
  cb()
}

const deleteBlogPost = dispatch => id => {
  dispatch({ type: 'delete_blogpost', payload: id })
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }]
    case 'delete_blogpost':
      return state.filter(post => post.id !== action.payload)
    default:
      return state
  }
}

export const { Context, Provider } = createDataContext({
  reducer: blogReducer,
  actions: { addBlogPost, deleteBlogPost },
  initialState: []
})
