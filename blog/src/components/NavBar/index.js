import React, { useState } from 'react'
import './style.css'

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
          <li className="navbar__list--item"><a className="navbar__list--link" href="#">O mnie</a></li>
          <li className="navbar__list--item"><a className="navbar__list--link" href="#">Receptury</a></li>
          <li className="navbar__list--item"><a className="navbar__list--link" href="#">Zioła</a></li>
          <li className="navbar__list--item"><a className="navbar__list--link" href="#">Eko styl</a></li>
          <li className="navbar__list--item"><a className="navbar__list--link" href="#">Aromaterapia</a></li>
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