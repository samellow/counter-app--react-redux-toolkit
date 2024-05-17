import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const Postauthor = ({ userId }) => {

    const users = useSelector(selectAllUsers)
    console.log(users)

    const author = users.find(user => user.id === userId)
    console.log(author)
  return (
    <span>by {author ? author.name : 'Unknown author'}</span>
  )
}

export default Postauthor