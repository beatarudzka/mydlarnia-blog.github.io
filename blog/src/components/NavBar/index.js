import React, { useState } from 'react'

import './style.css'

import { NavLink } from 'react-router-dom'

const NavBar = (props) => {


  const [search, setSearch] = useState(false)

  const submitSearch = (e) => {
    e.preventDefault()
    alert('ok')
  }

  const searchClass = search ? 'searchInput active' : 'searchInput'

  const openSearch = () => {
    setSearch(true)
  }

  return (
    <>
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/about-me">O mnie</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/receptury">Receptury</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/zielarstwo">Zielarstwo</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/permakultura">Permakultura</NavLink></li>
          <li className="navbar__list--item"><NavLink className="navbar__list--link" to="/aromaterapia">Aromaterapia</NavLink></li>
        </ul>
        <div className="search">
          <form className="search__form" onSubmit={submitSearch}>
            <input className={searchClass} type="text" placeholder="Szukaj na blogu..." />
            <img onClick={openSearch} className="search__form--icon" alt="Search" src={require('../../assets/icons/search.png')} />
          </form>
        </div>
      </div>
    </>
  )
}

export default NavBar