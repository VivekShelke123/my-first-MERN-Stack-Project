import React from 'react'
import { Container } from 'react-bootstrap';

import pick from './pict1.avif'
import pick1 from './pict2.avif'
import pick2 from './pict3.avif'
import pick3 from './pict4.avif'
import pick4 from './pict5.avif'
const Firstp = () => {
  return (
        <Container>
      <h1>Planning your trip</h1>
      <br />
        <img src={pick} alt="" width={'70%'} />
        <br />
        <ol>
            <li>
            Download the app to have some of our best features and services at your fingertips.
            </li>
            <li>
            View travel requirements for your destination in the Travel-Ready Center.
            </li>
            <li>
            Pay for your bags in advance and sign up for bag delivery.
            </li>
            <li>
            Set up contactless payments for inflight purchases in advance.
            </li>
            <li>
            Let us know if you have any special requests, like kosher meals or wheelchair services.
            </li>
        </ol>
        <br />
        <h1>
            In the lobby
        </h1>
        <br />
        <img src={pick1} alt="" width={'70%'} />
        <br></br>
        <ol>
            <li>
            View the terminal guide in our app so you enter the airport close to your gate.
            </li>
            <li>
            Check in your bag at the kiosk. Then, drop it off with an agent at the bag drop counter. To save time at the airport, use bag drop shortcut. Check a bag during check-in on united.com or the United app. Then, drop your bag in the bag drop shortcut area at the airport. An agent will tag your bag and quickly have you on your way.
            </li>
            <li>
            Get TSA PreCheck® to move through airport security faster.
            </li>
        </ol>
        <br />
        <h1>At the gate</h1>
        <br />
        <img src={pick2} alt="" width={'70%'} />
        <br />
        <ol>
            <li>
            Scan your own boarding pass during boarding.
            </li>
            <li>
            Use the app to connect with an agent via phone, chat or video if you have any questions.
            </li>
            <li>
            Wait for your flight at a United Club with a membership or one-time pass.
            </li>
        </ol>
        <br />
        <h1>On the plane</h1>
        <br />
        <img src={pick3} alt="" width={'70%'} />
        <br />
        <ol>
            <li>
            Board after we make sure the plane is cleaned and meets CDC guidelines.
            </li>
            <li>
            Receive a hand sanitizer wipe during boarding.
            </li>
            <li>
            Connect to our Wi-Fi network to use free messaging or buy Wi-Fi for your flight.
            </li>
            <li>
            Use contactless payments to buy snacks and drinks.
            </li>
            <li>
            Watch movies and TV shows, or play games, on our app.
            </li>
            <li>
            Receive items like pillows, blankets and headphones upon request.
            </li>
        </ol>
        <br />
        <h1>Upon Arrival</h1>
        <br />
        <img src={pick4} alt="" width={'70%'} />
        <br />
        <ol>
            <li>
            Check bag tracking using the app to see where your bags are.
            </li>
            <li>
            Use our terminal guide to find your connection or baggage claim.
            </li>
        </ol>
        </Container>
  )
}

export default Firstp
