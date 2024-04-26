import React from "react";
import { Button } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import "./Link.css";
import {Link} from "react-router-dom"
const Main = () => {
  return (
    <Container>
    <h3 className='bb2' style={{textAlign:'center'}}>Helpful Links</h3>
      <br />
    <div className="container" style={{textAlign:"center"}}>

      <Link to="/Helplink1">
        <Button style={{backgroundColor:'white',marginReft:1000}}> 
        
        <h2 className="h2" style={{fontSize:23}}>What to expect when you fly.
        </h2 >
        <p className="h3" style={{fontSize:19}}>Navigate the airport and your trip in the post pandamic world.</p>
        
        </Button>
        </Link>
        <Link to="/Helplink2">
        <Button style={{backgroundColor:'white',marginLeft:100}} className="info-button:hover"> 
        
        <h2 className="h2" style={{fontSize:23}}>Traveling with children.
        </h2 >
        <p className="h3" style={{fontSize:19}}>Tips and information if you're Traveling with little one.</p>
        
        </Button>
        </Link>
    </div>
    </Container>
  );
};

export default Main;
