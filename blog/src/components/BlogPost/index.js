import React from 'react'
import './style.css'

import Card from '../UI/Card'

const BlogPost = (props) => {
  return (
    <div className="post__container">
      <Card>
        <div className="post__header">
          <span className="post__header--category">Aromaterapia</span>
          <h1 className="post__header--title">Aromaterapia – jak wybrać olejek aromatyczny dla siebie?</h1>
          <span className="post_header--details"> 11 Luty, 2020, Beata Rudzka</span>
        </div>
        <div className="image_container">
          < img className="image" src={require('../../blogPostImages/img6.jpg')} alt="Aromaterapy" />
        </div>
      </Card>
    </div>
  )
}

export default BlogPost