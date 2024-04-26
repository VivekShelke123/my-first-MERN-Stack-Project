import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from "./logo.jpg";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


const pages = ['Booking', 'MY PLANS', 'ABOUT US', 'DEALS', 'HELP'];
const settings = ['Profile', 'Account'];
const path = ['/BookingForm', '/myPlans', '/About', '/Deals', '/Helplink2'];
const acc = ['/Profile', '/Accounts'];

function ResponsiveNavbar(props) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setAnchorEl(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const LogoutFunction = (event) => {

        localStorage.setItem('Logged', JSON.stringify(false));
        localStorage.removeItem('email');
        alert('Logged Out');
        props.setLog(false);

        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }
    
    }


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
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={path[index]}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            <Link to='/' onClick={LogoutFunction}>Logout</Link>
                        </Menu>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveNavbar;
