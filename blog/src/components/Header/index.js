import React from 'react'
import './style.css'

import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header">
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/post">Blog</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/zielarstwo">Zielarstwo</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/mydla">Mydła</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/permakultura">Permakultura</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/kosmetyki">Kosmetyki</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header