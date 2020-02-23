import React from 'react'

import './style.css'

import img5 from "../../assets/images/img5.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"
import Card from '../../components/UI/Card'




const Home = props => {
  return (
    <Card> 
      <div className="PostGallery">
        <section className="MainGallery">
         <div className="MainGallery__container">
           <img className="MainGallery--image" src={img5} alt="Soaps"/>
         </div>
        </section>
        <section className="SideGallery">
        <div className="SideGallery__container">
           <img className="SideGallery--image" src={img2} alt="Flowers"/>
         </div>
         <div className="SideGallery__container">
           <img className="SideGallery--image" src={img3} alt="Soap brown"/>
         </div>
         <div className="SideGallery__container">
           <img className="SideGallery--image" src={img4} alt="Flowers"/>
         </div>
        </section>
      </div>
    </Card>
  )
}

export default Home