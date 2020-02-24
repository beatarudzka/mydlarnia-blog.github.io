import React from 'react'

import './style.css'

import img5 from "../../assets/images/img5.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"


import Sidebar from './../../components/SideBar'
import RecentPosts from './RecentPosts'


const SideImage = props => {
  return(
    <div style={{height:`${props.height}px`}}>
      <img src={props.src} alt=""/>
    </div>
  )
}

const Home = props => {

  const GalleryHeight = 600
  const GalleryStyle={
    height:GalleryHeight+'px',
    overflow:'hidden'
  }

 
  return (
    <>
 
      <div className="PostGallery" style={GalleryStyle}>
        <section className="MainGallery">
         <div className="MainGallery__container">
           <img className="MainGallery--image" src={img4} alt="Soaps"/>
         </div>
        </section>
        
        <section className="SideGallery" >
        <div className="SideGallery__container" >
           <img className="SideGallery--image" src={img2} alt="Flowers"/>
         </div>
         <div className="SideGallery__container">
           <img className="SideGallery--image" src={img3} alt="Soap brown"/>
         </div>
         <div className="SideGallery__container">
           <img className="SideGallery--image" src={img5} alt="Flowers"/>
         </div>
        </section>
      </div>

      <div className="HomeContainer">
        <Sidebar/>
        <RecentPosts/>
      </div>
    </>

  )
}

export default Home