import React from 'react'
import './style.css'

const NavBar = (props) => {
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
          <input type="text" placeholder="Szukaj na blogu..." />
          <img alt="Search" src={require('../../assets/icons/search.png')} />
        </div>
      </div>
    </>
  )
}

export default NavBar