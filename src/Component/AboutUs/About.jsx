import React from 'react'
import img from './about.jpg'
import './About.css'
const About = () => {
  return (

    <>
    <div className='imga'>
       <img src={img} alt=" " width={"100%"} length={"100%"}/>

       <div className='contain'>

          <div className='abc' >
            <h3>Welcome to Maverick</h3>
            <p>At Maverick, we soar beyond boundaries, connecting people and places with a commitment to excellence that spans 10 years. Since our inception in 2023, we've been dedicated to delivering more than just flights; we provide experiences that elevate travel and redefine the journey itself.</p>
          </div>

          <div className='abc' >
            <h3>Our History</h3>
            <p>Established with a vision to revolutionize air travel, Mavrick took flight with a mission to make the world more accessible. From our humble beginnings, we've expanded our routes, fleet, and services while maintaining a steadfast focus on safety, reliability, and customer satisfaction.</p>
          </div>

          <div className='abc' >
            <h3>Our Commitment</h3>
            <p>At the heart of our operations lies a dedication to our passengers. We strive to offer unparalleled comfort, convenience, and efficiency in every journey. Our commitment to safety is unwavering, adhering to the highest industry standards to ensure peace of mind for every traveler who chooses Maverick.</p>
          </div>

          <div className='abc' >
            <h3>Our Services</h3>
            <p>From the moment you book with us until the wheels touch down at your destination, Maverick strives to exceed your expectations. Whether you're traveling for business or leisure, our comprehensive services cater to your needs, offering premium amenities, innovative entertainment, and culinary delights on board.</p>
          </div>
      
    </div>
    </div>
    </>
  )
}

export default About
