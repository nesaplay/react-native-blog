import createDataContext from './createDataContext'

const addBlogPost = dispatch => () => {
  dispatch({ type: 'add_blogpost' })
}

const deleteBlogPost = dispatch => (id) => {
  dispatch({ type: 'delete_blogpost', payload: id })
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}` }]
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
