import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards1 from "./Cards1";
import i1 from "./1.avif"
import i2 from "./2.avif"
import i3 from "./3.avif"
import "./Cards.css"
import { Link } from "react-router-dom";


const Cards = () => {
  return (
    <div>
      <div className="head">
        <h3>Plan Your Next Adventure</h3>
      </div>

      <div>
        <Container>
          <Row>
            <Col md={4}><Link></Link><Cards1 title="Shop with travel credits" description="Book a new trip or upgrade your current one with United travel credits." img={i1} button="Use Now" path="/Use"/></Col>
            <Col md={4}><Cards1 title="Get ready for your trip" description="View travel and entry requirements for anywhere in the world." img={i2} button="Learn More" path="/Learn"/></Col>
            <Col md={4}><Cards1 title="Save with United Packages" description="Bundle your flights, hotels and car rentals to get the best deals." img={i3}  button="Shop Now" path="/Shop"/></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cards;
