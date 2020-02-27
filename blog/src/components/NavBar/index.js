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

  const searchText = () =>{
    
  }

  return (
    <>
        <div className="search">
          <form className="search__form" onSubmit={submitSearch}>
            <input className={searchClass} type="text" placeholder="Szukaj na blogu..." />
            <img onClick={openSearch} className="search__form--icon" alt="Search" src={require('../../assets/icons/search.png')} />
          </form>
        </div>
    </>
  )
}

export default NavBar