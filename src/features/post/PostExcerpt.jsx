import React from 'react'
import PostAuthor from './Postauthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostExcerpt = ({post}) => {
  return (
    <article>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId}></PostAuthor>
                    <TimeAgo timestamp={post.date}></TimeAgo>
                </p>
                <ReactionButtons post={post}></ReactionButtons>

            </article>     
  )
}

export default PostExcerpt