import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css';

//Paralaxx nav
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

//Scroll button

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#about',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};




const Navigation = (props) => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'

            },
            navLogo: {
                [theme.breakpoints.down('sm')]: {
                    textAlign: "right !important"

                },

            }

        }
    })
    const { navIcon, navItemContainer, navLogo } = useStyle();
    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250, }}
            role="presentation"

        >
            <List>

                <ListItem button>
                    <ListItemText>
                        <Link to="/home" style={{ textDecoration: "none", }}>Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link to="/home#about" style={{ textDecoration: "none", }}>About</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link to="/allproducts" style={{ textDecoration: "none", }}>Explore</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                {user.email ? <Box>
                    <ListItem button>
                        <ListItemText>
                            <Link to="/dashboard" style={{ textDecoration: "none", }}>Dashboard</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <span style={{ color: "blue", fontWeight: "bold", paddingTop: "10px" }}>{user ? user.displayName : user.email}</span>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </Box>
                    :
                    <Box>
                        <ListItem button>
                            <ListItemText>
                                <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Box>
                }


            </List>

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1, }}>
                <ElevationScroll {...props}>
                    <AppBar>
                        <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={navLogo} align="left" variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "2rem" }}>
                                <span style={{ color: "#2C90B9" }}>CAR</span> <span style={{ color: "#e3376e" }}>SHOP</span>
                            </Typography>
                            <Link className={navItemContainer} to="/home" style={{ textDecoration: "none", color: "white" }}><Button sx={{ color: "black", fontWeight: "bold" }}>Home</Button></Link>
                            <div className='NavHashLink'>
                                {/* <NavHashLink
                                    smooth to="#home"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">Home</Button></NavHashLink> */}
                                <NavHashLink
                                    smooth to="/home#about"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">About</Button></NavHashLink>
                                <NavHashLink
                                    smooth to="/home#featuredcar"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">Featured</Button></NavHashLink>
                                <NavHashLink
                                    smooth to="/home#service"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">Service</Button></NavHashLink>
                                <NavHashLink
                                    smooth to="/home#reviews"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">REVIEWS</Button></NavHashLink>
                                <NavHashLink
                                    smooth to="/home#contactus"
                                    style={{ textDecoration: "none", }}
                                > <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} variant="inherit">Contact us</Button></NavHashLink>
                            </div>






                            {
                                user?.email ?
                                    <Box className={navItemContainer}>
                                        <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard"> <Button style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Dashboard</Button></NavLink>
                                        <span style={{ color: "red", fontWeight: "bold", fontSize: "1rem", paddingTop: "10px" }}>{user ? user.displayName.toUpperCase() : user.email}</span>
                                        <Button onClick={logOut} style={{ color: "black", fontWeight: "bold" }}>Logout</Button>
                                    </Box>

                                    :
                                    <NavLink className={navItemContainer} style={{ textDecoration: "none", color: "white" }} to="/login"> <Button style={{ color: "black", fontWeight: "bold" }}>Login</Button></NavLink>
                            }

                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </Box>
            <div>

                <React.Fragment>

                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                    <ScrollTop {...props}>
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </React.Fragment>

            </div>
        </>

    );
};

export default Navigation;


