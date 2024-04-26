import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './Help.css'
import img from './light-bulb.jpg'
import top from './top-child.jpg'
import seats from './car-seats.jpg'
import bassinets from './bassinets.jpg'
import child from './Traveling-with-Children.jpg'
import lap from './infant-on-lap.jpg'
import infant from './infant-seat.jpg'
import kids from './kids.jpg'
import stroller from './stroller.png'
import security from './security.jpg'
import nursing from './nursing.jpg'

const Help = () => {
  return (
    <div>
        <img src={top} alt="" width={'100%'} />
      <Container>
        <h3 className='one'>Traveling with children</h3>
        <Col md={8}><p className='one'>Flying with kids can be challenging. We’re with you every step of the way to make sure your trip goes as smoothly as possible.</p>
        </Col>
        <h3 className='one'>Planning your trip</h3>
        <p className='one'>Here's what to keep in mind when booking your tickets and deciding what to bring with you.</p>
  
        <Row className='align'>
            <h4 className='align'>Ticketing options for children</h4>
            <Col className='align'>
                <img src={lap} alt="" className='image1'/>
                <h6 className='one'>Infants on lap</h6>
                <p className='one'>Children under two can sit on a parent’s lap during flights to any destination.</p>
            </Col>
            <Col className='align'>
                <img src={infant} alt="" className='image1'/>
                <h6 className='one'>Infant seats</h6>
                <p className='one'>Alternatively, infants can have their own seat if you bring an approved car seat.</p>
            </Col>
            <Col className='align'>
                <img src={kids} alt="" className='image1'/>
                <h6 className='one'>All other kids</h6>
                <p className='one'>Children older than two will need a ticket and their own seat on the plane.</p>
            </Col>
        </Row>

        <Row>
            <Col md={8}>
                <p className='one'>We do allow pre-boarding for families traveling with children less than two years old. A gate agent will announce when it’s time for you to board.</p>
                <p>If you’re flying with children under 12, we have new tools that make it easier for them to sit next to an adult in your party for free. This includes families who have Basic Economy tickets. If seats next to each other aren’t available on your flight because of last minute bookings or unscheduled aircraft changes, you can switch to another flight with availability in the same cabin for free and won’t be charged for the difference in fare.</p>
                <p>Infant baggage allowance for infants is:</p>
                <ul>
                    <li>The same amount and weight limit as the adult traveling.</li>
                    <li>If you exceed the infant allowance, it becomes part of adult's baggage, and all restrictions and fees apply.</li>
                </ul>
            </Col>
        </Row>

        <Row className='one'>
            <Col md={3}>
                <img src={img} alt="" className='image'/>
            </Col>
            <Col md={8}>
                <h4>Traveler pro tips</h4>
                <p  className='one'>We have a few tips to make sure you’re ready for common situations that come up while traveling with kids:</p>
                <ul>
                    <li>If your little one is using a tablet to watch movies or play games, make sure the device is fully charged in case you aren’t sitting next to an outlet and bring headphones.</li>
                    <li>Easily relieve ear pressure during takeoff and landing by keeping snacks on hand.</li>
                    <li>In case your flight is delayed make sure you have extra diapers, formula, bottles and other essentials in the bag you bring onboard.</li>
                </ul>
            </Col>
        </Row>

        <h3 className='one'>At the airport</h3>
        <p className='one'>How you get through the airport depends on the age of your kids. Here’s what to keep in mind.</p>
 
        <Row className='align'>
            <Col>
                <img src={security} alt="" className='image2' />
                <h4 className='one'>The security line</h4>
                <p className='one'>Children under 18 don’t need an ID to fly domestically but do need a passport for international flights. You can also bring breast milk or formula through security, even if your child isn’t with you.</p>
            </Col>
            <Col>
                <img src={stroller} alt="" className='image2'/>
                <h4 className='one'>Getting to the gate</h4>
                <p className='one'>Standard strollers, folding wagons, and car seats can be used to get to your gate and then checked for free. They’ll be returned to you on arrival. Collapsible strollers can be stored in-cabin.</p>
            </Col>
            <Col>
                <img src={nursing} alt="" className='image2'/>
                <h4 className='one'>Nursing at the airport</h4>
                <p className='one'>You can nurse wherever is most comfortable to you. Many airports have nursing spaces with a table, bench and outlets to make breastfeeding easier.</p>
            </Col>
        </Row>

        <h3 className='one'>On the plane</h3>
        <p className='one'>You’re now in the last leg of your trip. Here’s the most important info you’re going to need.</p>

        <Row className='one'>
            <Col>
                <img src={seats} alt=""  width={'100%'} className='one'/>
                <h4 className='one'>Car seats</h4>
                <p className='one'>Car seats made after 1985 are FAA-approved and will have a certification sticker attached to them. These car seats can be used on your flight, but there are exceptions. Children in car seats should sit in a window seat with the car seat secured to the seat itself. Your child should be in their seat during takeoff, landing and turbulence.</p>
            </Col>
            <Col>
                <img src={bassinets} alt="" width={'100%'} className='one'/>
                <h4 className='one'>Bassinets</h4>
                <p className='one'>We provide free onboard bassinets in United Polaris® business class and in Economy on some international flights. They can be used anytime during the flight when the seatbelt sign is off.</p>
            </Col>
        </Row>

        <Row>
            <Col md={8} className='one'>
                <b>	Booster seats and harnesses that hold an infant to your chest, such as a papoose, cannot be used onboard your flight.</b>
            </Col>
        </Row>

        <Row className='two'>
            <h4 className=''>Nursing while flying</h4>
            <Col className='one'>
                <h4>We do...</h4>
                <ul>
                    <li className='one'>
                    Let you breastfeed or pump from your seat or the bathroom.
                    </li>
                    <li className='one'>Bring you ice to keep milk and formula cool.</li>
                    <li className='one'>Allow breast milk, formula and breast pumps onboard for free.</li>
                </ul>
            </Col>
            <Col>
                <h4 className='one'>We don't...</h4>
                <ul>
                    <li className='one'>Store breastmilk in United fridges or coolers.</li>
                    <li className='one'>Guarantee a seat with in-seat power.</li>
                </ul>
            </Col>
        </Row>

        <Row className='three1'>
            <Col>
                <h4 className='one'>Keeping your children occupied</h4>
                <p className='one'>We’ve partnered with Sesame Workshop, the nonprofit educational organization behind Sesame Street, to create a brand-new Children’s Travel Kit. The kit is made from recycled paper and includes an activity book, crayons and a puzzle. Plus, United is the first U.S. carrier to offer a Sensory Calming strip that has a textured surface to help soothe anxiety. Ask your flight attendant to find out if the kits are available on your next flight.</p>
                <p className='one'>You can also view the snack options, including kids' meals, for your flight and cabin before your trip. We recommend bringing snacks from home too, so you can make sure you have food you know your child will enjoy.</p>
            </Col>
            <Col className='one'>
                <img src={child} alt="" width={'100%'}/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Help
