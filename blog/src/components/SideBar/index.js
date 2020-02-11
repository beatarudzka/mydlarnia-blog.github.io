import React, { useState, useEffect } from 'react'

import Card from '../UI/Card'
import blogPost from '../../data/blog.json'

import './style.css'
import { NavLink } from 'react-router-dom'

const SideBar = (props) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts = blogPost.data
    setPosts(posts)
  }, posts)
  return (

    <div className="sidebar__container">
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="sidebar_header">
          <span>O mnie</span>
        </div>
        <div className="sidebar__image">
          <img className="sidebar__image--picture" src={require('../../blogPostImages/me.jpg')} alt="Author of Blog" />
        </div>
        <div>
          <p className="sidebar__text">
            Aktualnie jestem zafascynowana technikami relaksacyjnymi i oddechowymi, psychologią kognitywno – poznawczą i aromaterapią emocji.Tworzę także nowe receptury mydlarskie z surowcami prosto z mojego gospodarstwa ekologicznego.
          </p>
        </div>
      </Card>
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="sidebar_header">

        </div>
      </Card>
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="sidebar_header">
          <span>Ostatnie wpisy</span>
        </div>

        {
          posts.map(post => {
            return (

              <NavLink to={`${post.id}`}>
                <div className="sidebar__recent-posts">
                  <div className="recent-post">
                    <h3 className="recent-post__title">{post.blogTitle}</h3>
                    <span className="recent-post__date">{post.postedOn}</span>
                  </div>
                </div>
              </NavLink>

            )
          })
        }

      </Card>

    </div>

  )
}

export default SideBar