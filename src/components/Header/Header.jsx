import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation} from 'react-router-dom';
import logo from "../../assets/wep-logo-at-2x-tenth.png"
import "./Header.css"

const Header = () => {


  const [activeTab, setActiveTab] = useState('p/1');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    // Update active tab when a navigation tab is clicked
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'rgb(255, 255, 255)',zIndex:3000}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="https://worldexchangeplaza.com/" target="_blank" style={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: '25px' }} />
          </Link>
       

          {/* Navigation menu for mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent:'end', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
             
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              style={{ display: { xs: 'block', md: 'none' },zIndex:3000 }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/p/1">
                The History
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/p/2">
                The Renovation
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/p/3">
                The Space
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/p/4">
                Contact
              </MenuItem>
            </Menu>
          </Box>
        

          {/* Navigation tabs for desktop view */}
          <Box sx={{
            display: 'flex', justifyContent: 'end',
            flexGrow: 1, display: { xs: 'none', md: 'flex' }
          }}>
            <Button
              component={Link}
              className='headerNames'
              to="/p/1"
              sx={{
                mx: 1,
                position: 'relative',
                textDecoration: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-5px',
                  width: '100%',
                  transform: activeTab === 'p/1' ? '' : 'scaleX(0)' ,
                  transition: '1s',
                  borderBottom: activeTab === 'p/1' ? '3px solid black' : 'none',
                },
                '&:hover::after': {
                  borderBottom: '3px solid black',
                  transform:'scaleX(1)'
                
                },
              }}
            onClick={() => handleTabClick('p/1')}
             
            >
              HOME
            </Button>
            <Button
              component={Link}
              to="/p/2"
              className='headerNames'
              sx={{
                mx: 1,
                position: 'relative',
                textDecoration: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-5px',
                  width: '100%',
                  transform: activeTab === 'p/2' ? '' : 'scaleX(0)' ,
                  transition: '1s',
                  borderBottom: activeTab === 'p/2' ? '3px solid black' : 'none',
                },
                '&:hover::after': {
                  borderBottom: '3px solid black',
                  transform:'scaleX(1)'
                
                },
              }}
            onClick={() => handleTabClick('p/2')}
            >
              THE RENOVATION
            </Button>
            <Button
              component={Link}
              to="/p/3"
              className='headerNames'
              sx={{
                mx: 1,
                position: 'relative',
                textDecoration: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-5px',
                  width: '100%',
                  transform: activeTab === 'p/3' ? '' : 'scaleX(0)' ,
                  transition: '1s',
                  borderBottom: activeTab === 'p/3' ? '3px solid black' : 'none',
                },
                '&:hover::after': {
                  borderBottom: '3px solid black',
                  transform:'scaleX(1)'
                
                },
              }}
            onClick={() => handleTabClick('p/3')}
            >
              PROJECT TEAM
            </Button>
            <Button
              component={Link}
              to="/p/4"
              className='headerNames'
              sx={{
                mx: 1,
                position: 'relative',
                textDecoration: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-5px',
                  width: '100%',
                  transform: activeTab === 'p/4' ? '' : 'scaleX(0)' ,
                  transition: '1s',
                  borderBottom: activeTab === 'p/4' ? '3px solid black' : 'none',
                },
                '&:hover::after': {
                  borderBottom: '3px solid black',
                  transform:'scaleX(1)'
                },
              }}
            onClick={() => handleTabClick('p/4')}
            >
              LEASING
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
