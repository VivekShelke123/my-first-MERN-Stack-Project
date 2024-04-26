import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "./123.avif";
import "../Cards/Cards.css"
import Button from '@mui/material/Button';

const Info = () => {
  return (
    <div>
        <div className="head">
            <h3>Changing the way you travel</h3>
        </div>
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <img src={img} alt="" width={"600px"} height={"350px"}/>
            </Col>

            <Col md={6}>
                <h3>We’ve got your back with the United app</h3>
                <div className="para">With our app you can:
                
                    <ul>
                        <li>Book new trips and add changes to your current ones</li>
                        <li>Get through the airport quicker with terminal guide</li>
                        <li>Buy snacks, watch movies, and more</li>
                    </ul>
                  </div>
                
            
                <Button variant="outlined">Download</Button>
            </Col>
        
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Info;
