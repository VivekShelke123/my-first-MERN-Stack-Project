import React from 'react'
import './Mapp.css'
const Mapp = () => {
  return (
    <div className='container'>
        <h3 className='Marg'>Explore Destinations</h3>
        <p className='Marg'>Not sure where to go? Use our map to find flights to great destinations.
        Embark on a seamless journey through the skies.
        Unveil the world of aviation.
        Embark on a journey of discovery and exploration
        where the world is at your fingertips, and the sky's the limit. Start mapping your next adventure now!</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26611629.788923003!2d64.07249192253924!3d22.415762289073644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sall%20india%20airport!5e0!3m2!1sen!2sin!4v1703793978817!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Mapp
