import React from 'react'
import PostsList from './features/post/PostsList'
import AddPostForm from './features/post/AddPostForm'
const App = () => {
  return (
    <main className="App">
      <AddPostForm></AddPostForm>
      <PostsList></PostsList>

    </main>
  )
}

export default App