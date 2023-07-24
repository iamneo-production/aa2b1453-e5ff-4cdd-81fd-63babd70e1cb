import * as React from 'react';
import {Link} from "react-router-dom"
import './Category.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
export default function Category() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  

  return (
    <nav className="ctnavbar">
    <div className="ctcontainer">
      <div className="ctmenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`ctnav-elements  ${showNavbar && 'ctactive'}`}>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
          <li id="ctcurrent">
            <NavLink to="/Category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/FeedbackForm">Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/CartPage">Cart</NavLink>
          </li>
        </ul>
      </div>

    <div class="log">
       <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Tooltip title="Account settings">
        
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          
          <Avatar sx={{ width: 40, height: 40 ,bgcolor: "green"}} id="avatar">D</Avatar>
        </IconButton>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <Link to="/Option">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Switch account
        </MenuItem>
        </Link>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
       <Link to="/">Logout</Link>
      </MenuItem>
    </Menu>
        </div>
    </div>


  <div id="wbox">
   <Link to="/Vegetables">
         <div id="im1">
             
              <h1 className='fruits'>Vegetables</h1>
         </div>
         </Link>
        
         <div id="im2">
         <h1 className='fruits'>Fruits</h1>
         </div>   
         <Link to="/Healthdrinks">
         <div id="im3">
         <h1 className='fruits'>Health drinks</h1>
         </div>
         </Link>
         <div id="im4">
         <h1 className='fruits'>Grain products</h1>
         </div>
         <Link to="/Beverages">
         <div id="im5">
         <h1 className='fruits'>Cool drinks and beverages</h1>
         </div>
         </Link>
         <div id="im6">
         <h1 className='fruits'>Stationary products</h1>
         </div>
         <div id="im7">
         <h1 className='fruits'>Snacks</h1>
         </div>
         <Link to="/Dairy">
         <div id="im8">
         <h1 className='fruits'>Dairy products</h1>
         </div>
         </Link>
         <div id="im9">
         <h1 className='fruits'>Personal care products</h1>
         </div> 
        
         <div id="im10">
         <h1 className='fruits'>Babycare products</h1>
         </div>
        
         <div id="im11">
         <h1 className='fruits'>Condiments and Spices</h1>
         </div> 
         <div id="im12">
         <h1 className='fruits'>Cleaning supplies</h1>
         </div> 
   </div> 
 



 
   





  
  <br></br>
      </nav>

  

 
    
   );
  }
  