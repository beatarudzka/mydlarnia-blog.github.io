import React from 'react'

import './style.css'

import img5 from "../../assets/images/img5.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import img4 from "../../assets/images/img4.jpg"


import Sidebar from './../../components/SideBar'
import RecentPosts from './RecentPosts'



const Home = props => {

 
  return (
<>
    <div class="grid">
					<figure class="effect-lily">
						<img src={img4} alt="Handmade soap"/>
						<figcaption>
							<div>
								<h2>Ręcznie robione <span> Mydła</span></h2>
								<p>Poznaj tajniki wyrobu własnego mydła</p>
							</div>
							<a href="#">Zobacz</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src={img2} alt="Herbs"/>
						<figcaption>
							<div>
								<h2>Wiedza o <span> ziołach</span></h2>
								<p>Właściwości roślin zielarskich</p>
							</div>
							<a href="#">Zobacz</a>
						</figcaption>			
					</figure>
          <figure class="effect-lily">
						<img src={img3} alt="Eco cosmetics"/>
						<figcaption>
							<div>
								<h2>Eko <span> Kosmetyki</span></h2>
								<p>Receptury do wykonania w domowym zaciszu</p>
							</div>
							<a href="#">Zobacz</a>
						</figcaption>			
					</figure>
          <figure class="effect-lily">
						<img src={img4} alt="Garden"/>
						<figcaption>
							<div>
								<h2>Ekologiczny <span> Ogród</span></h2>
								<p>Zajrzyj do mojego ekologicznego ogrodu</p>
							</div>
							<a href="#">Zobacz</a>
						</figcaption>			
					</figure>
				</div>

      {/* <div className="HomeContainer">
        <Sidebar/>
        <RecentPosts/>
      </div> */}
    </>

  )
}

export default Home