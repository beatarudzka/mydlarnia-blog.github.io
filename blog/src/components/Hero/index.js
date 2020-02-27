import React from 'react'

import './style.css'

import Logo from '../Logo'
import NavBar from '../NavBar'

const Hero = (props) => {
  return (
    <div>
      <div className="Logo__container">
        <div className="logo__card">
          <Logo />
        </div>
        <NavBar />
      </div>
    </div>
  )
}

export default Hero
