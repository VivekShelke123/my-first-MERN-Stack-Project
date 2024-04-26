import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import save1 from "./save.png";
import flight1 from "./flight.png";
import cred from "./creds.webp";
const Credits = () => {
  return (
    <>
      <Container style={{ padding: "20px" }}>
        <div>
          <h3>Travel Credits</h3>
          <p>
            We have two types of travel credits, and both can easily be used to
            shop for flights and amenities on our website or app. Get to know
            future flight credits and travel certificates.
          </p>
        </div>
      </Container>
      <div style={{ border: "20px", backgroundColor: "lightgrey" }}>
        <Container style={{ padding: "20px", textAlign: "center" }}>
          <h3 style={{ padding: "20px" }}>Using your credits is easy</h3>
          <Row>
            <Col>
              <img src={save1} alt="" width={"50px"} />
              <h4>Step 1: Find your credits</h4>
              <p>
                Sign in and view your credits in your MileagePlus account, or
                look them up below.
              </p>
            </Col>

            <Col>
              <img src={flight1} alt="" width={"50px"} />
              <h4>Step 2: Find a flight</h4>
              <p>Shop on our website or app just like you normally would.</p>
            </Col>

            <Col>
              <img src={cred} alt="" width={"50px"} />
              <h4>Step 3: Use your credits</h4>
              <p>
                When you’re ready to pay, select travel credits as your payment
                method.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container style={{ padding: "20px" }}>
        <div>
          <h3>Future flight credits</h3>
          <p>
            Future flight credits are issued if you cancel your trip or change
            your flight to a less expensive one. These credits can be used to
            book travel on United, United Express, and partner-operated flights
            purchased on our website or app. You can also apply future flight
            credits toward some non-ticket items, like Economy Plus® seating. If
            you choose to apply your credits towards non-ticket items, you’ll
            need to do that when booking your ticket as you can’t apply future
            flight credits after your initial ticket purchase. Want to know
            more? Check out our frequently asked questions.
          </p>
        </div>

        <div>
          <h3>Travel certificates</h3>
          <p>
            Travel certificates are issued if you volunteer to give up your seat
            on a flight, or as a gesture of goodwill. These credits, sometimes
            known as electronic travel certificates, can be used in much the
            same way as future flight credits. You can book travel on most
            flights, and purchase some non-ticket items, like Economy Plus
            seating. Want to know more? Check out our frequently asked questions
          </p>
        </div>
      </Container>
    </>
  );
};

export default Credits;
