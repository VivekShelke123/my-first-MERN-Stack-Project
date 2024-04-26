import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Button } from '@mui/material';


import logo from "./logo.jpg";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


const pages = [ 'ABOUT US', 'DEALS', 'HELP'];
const path = [ '/About', '/Deals', '/Helplink2']

function ResponsiveNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static " sx={{ bgcolor: "black" }}>
      <Toolbar>
        <img
          src={logo}
          alt=""
          width={"50px"}
          height={"50px"}
          style={{ borderRadius: "50px" }}
        />
        <Typography variant="15px" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
          <Link to="/" style={{ color: "white " }}>
            MAVERICK
          </Link>
        </Typography>



        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {pages.map((page, index) => (
            <Button key={index} color="inherit" component={Link} to={path[index]}>
              {page}
            </Button>
          ))}
        </Box>
        <Link>
          <Button variant="primary" onClick={handleShow} style={{color:'white'}}>
            SIGN UP
          </Button>

          <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body> */}
            <Modal.Footer >
              <Link to="/Sign">
                <Button variant="secondary" onClick={handleClose}>
                  SIGN UP
                </Button>
              </Link>
              <Link to="/Login">
                <Button variant="primary" onClick={handleClose}>
                  LOGIN
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveNavbar;
