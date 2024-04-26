import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import turtle from './shutterstock.jpg'
import luxury from './luxury.jpg'
import family from './family.jpg'
import hero from './landing-hero.jpg'
import msg from './msg.png'
import ques from './ques.jpg'
import rupee from './rupee.png'
import './Deal.css'

const Deal = () => {
  return (
    <div>
      <Row className='align'>
        <Col style={{marginBottom:'20px',marginTop:'20px'}}>
            <img src={rupee} alt="" className='three'/><br />
            <b className='one'>INCREDIBLE PRICES</b> 
            <p className='one'>Get our absolute best deals by booking everything in a package.</p>
        </Col>
        <Col style={{marginBottom:'20px',marginTop:'20px'}}>
            <img src={msg} alt="" className='three'/><br />
            <b className='one'>EASY TRIP MANAGEMENT</b> 
            <p className='one'>Manage your entire trip in a single place with one confirmation. It's that easy!</p>
        </Col>
        <Col style={{marginBottom:'20px',marginTop:'20px'}}>
            <img src={ques} alt="" className='three'/><br />
            <b className='one'>HELP 24/7</b> 
            <p className='one'>We're always here for you – reach us 24 hours a day, 7 days a week.</p>
        </Col>
      </Row>

      <Container>

        <Row className='align'>
            <Col>
                <h3 className='one'>2024 Travel Wish List</h3>
                <p className='one' >With a world full of fascinating travel destinations, we help you choose your next perfect vacation spot. And with United Packages, you can unlock up to 40%* off the entire vacation when you book air and hotel together.</p>
            </Col>
            <Col>
                <img src={turtle} alt="" width={'80%'} style={{marginBottom:'20px',marginTop:'20px'}}/>
            </Col>
        </Row>

        <Row className='align'>
            <Col>
                <h3 className='one'>Luxury up to 30% Off</h3>
                <p className='one'>Limited time deal to experience The St. Regis Kanai Resort in Riviera Maya. </p>
            </Col>
            <Col>
                <img src={luxury} alt="" width={'80%'} style={{marginBottom:'20px',marginTop:'20px'}}/>
            </Col>
        </Row>

        <Row className='align'>
            <Col>
                <h3 className='one'>Exclusive bonus mile offer</h3>
                <p className='one'>When you book with us, not only do you get the best deals - we also provide an added 1,000 bonus miles on every vacation package. Explore all the ways you can book with Maverick to earn miles on eligible flights with MileagePlus.</p>
            </Col>
            <Col>
                <img src={family} alt="" width={'80%'} style={{marginBottom:'20px',marginTop:'20px'}}/>
            </Col>
        </Row>

        <Row className='align'>
            <Col>
                <h3 className='one'>Booking is better together</h3>
                <p className='one'>Now you can build your dream trip for less. With the new United Packages, you save by booking flights, hotels and car rentals all in one place. Book now and change your flight with no change fee.</p>
            </Col>
            <Col>
                <img src={hero} alt="" width={'80%'} style={{marginBottom:'20px',marginTop:'20px'}}/>
            </Col>
        </Row>
        <p style={{marginTop:'40px'}}>* Package savings based on all flight and hotel itineraries booked together as a package, compared to price of same flight and hotel booked separately on priceline.com. Savings vary and may not be available for all packages.

</p>
      </Container>

       


    </div>
  )
}

export default Deal
