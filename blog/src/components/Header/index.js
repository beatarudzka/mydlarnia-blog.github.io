import React from 'react'
import './style.css'

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__menu">
        <li className="header__menu--link" href="#">O mnie</li>
        <li className="header__menu--link" href="#">Receptury</li>
        <li className="header__menu--link" href="#">Eko styl</li>
        <li className="header__menu--link" href="#">Zioła</li>
      </nav>
      <div className="header__social-media">

      </div>
    </header>
  )
}

export default Header