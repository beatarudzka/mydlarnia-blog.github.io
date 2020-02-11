import React from 'react'

import './style.css'

import Card from '../UI/Card'
import Logo from '../Logo'
import NavBar from '../NavBar'

const Hero = (props) => {
  return (
    <div>
      <Card >
        <div className="logo__card">
          <Logo />
        </div>
        <NavBar />
      </Card>
    </div>
  )
}

export default Hero
