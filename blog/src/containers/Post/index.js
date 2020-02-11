import React from 'react'

import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'

import './style.css'


const Post = props => {

  const postId = props.match.params.postId

  return (
    <section className="container">
      <BlogPost {...props} />
      <SideBar />
    </section>
  )
}

export default Post