import React from 'react'
import "./style.css"
import img1 from "./bag.jpg"
import img2 from "./off.jpg"
import img3 from "./window.jpg"
import img4 from "./meal.jpg"
import img5 from "./room.jpg"
const Offers = () => {
  return (
    <div>
          <div>
        <h1 style={{marginLeft:"50px"}}>Trending Offers</h1>
    </div>

    <div class="offer-block">
        <div class="card1">
            <img class="img-card" src={img1} alt=""/>
            <div class="bio">
                <h1>Ease with Extra Baggage !</h1>
                <p>Pre-book excess baggage online.</p>
            </div>
        </div>
    
        <div class="card1">
            <img class="img-card" src={img2} alt=""/>
            <div class="bio">
                <h1>Best Deal !!</h1>
                <p>Book your ticket on makemytrip and get 40% off.</p>
            </div>
        </div>
        
        <div class="card1">
            <img class="img-card" src={img3} alt=""/>
            <div class="bio">
                <h1>Grab your window Seat Now!</h1>
                <p>Hassle free seat reservation, reserve your seat now.</p>
            </div>
        </div>
    
        <div class="card1">
            <img class="img-card" src={img4} alt=""/>
            <div class="bio">
                <h1>Hungry mid-air ?</h1>
                <p>No Worries, Enjoy delicious meal in skies.</p>
            </div>
        </div>

        <div class="card1">
            <img class="img-card" src={img5} alt=""/>
            <div class="bio">
                <h1>Book Now!</h1>
                <p>Best Deals on Hotels across World.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Offers
