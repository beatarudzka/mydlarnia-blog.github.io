import React from 'react'
import './style.css'

import LightCream from '../../../blogPostImages/img1.jpg'

const RecentPosts = (props) => {
  return (

    <div className="Article__Container">
    
      <div className="Article__Container--image">
        <img className="Article__image" src={LightCream} alt="Light Cream"/>
      </div>

      <div className="Article__Container--text">
        <span>Receptury</span>
        <h2>Lekkie masło do dłoni i ciała suchego</h2>
        <span>Październik 21, 2019</span>
        <p>Masło na bazie oleju kokosowego pozwoli utrzymać skórę w świetnej kondycji - nawilży oraz zwiększy jej sprężystość i elastyczność. Dodatek miodu zwiększa jego odżywcze właściwości - "płynne złoto" pomaga utrzymać odpowiedni poziom wilgotności skóry, ujędrnia i działa przeciwzapalnie. Ekstrakt z wanilii sprawi, że kosmetyk zyska piękny zapach i jego stosowanie będzie jeszcze przyjemniejsze. </p>
        <button>Czytaj</button>
      </div>      
  </div>

  )
}

export default RecentPosts