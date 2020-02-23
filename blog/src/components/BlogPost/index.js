import React, { useState, useEffect } from 'react'
import './style.css'

import Card from '../UI/Card'
import blogPost from '../../data/blog.json'

const BlogPost = (props) => {

  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  })

  const [postId, setPostId] = useState('')

  useEffect(() => {
    const postId = props.match.params.postId
    const post = blogPost.data.find(post => post.id == postId)
    setPost(post)
    setPostId(postId)
  }, [post, props.match.params.postId])

  if (post.blogImage == "") return null

  return (
    <div className="post__container">
      <Card>
        <div className="post__header">
          <span className="post__header--category">{post.blogCategory}</span>
          <h1 className="post__header--title">{post.blogTitle}</h1>
          <span className="post_header--details"> {post.postedOn}</span>
        </div>

        <div className="image_container">
          < img className="image" src={require('../../blogPostImages/' + post.blogImage)} alt="Post" />
        </div>

        <div className="post__content">
          <h3 className="post__content--title">
            {post.blogTitle}
          </h3>
          <p className="post__content--text">
            {post.blogText}
          </p>
        </div>

      </Card>
    </div>
  )
}

export default BlogPost