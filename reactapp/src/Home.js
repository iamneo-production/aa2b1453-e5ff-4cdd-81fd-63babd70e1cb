import * as React from 'react';
import {Link} from "react-router-dom"
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
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

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v',
      
     
    },
    {
      url: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg'
      
    },
    {
      url: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62'
    
    },
  ];
  

  return (
    <nav className="hnavbar">
      <div className="hcontainer">
        {/* <div className="logo">
          <Brand /> */}
        {/* </div> */}
        <div className="hmenu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}<MenuIcon></MenuIcon>
        </div>
        <div className={`hnav-elements  ${showNavbar && 'hactive'}`}>
          <ul>
            <li id="hcurrent">
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
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
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
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
         <NavLink to="/Profile">
        <MenuItem onClick={handleClose}>
         <Avatar /> Profile
        </MenuItem></NavLink>
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
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
         <NavLink to="/">Logout</NavLink>
        </MenuItem>
      </Menu>
          </div>
      </div>

     <center>
   <div className='sc1'>
     <p id="wel">Welcome to online grocery shopping</p>
   </div>
   </center>

    <center>
  <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,height:'500px'}}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </center>

<center>
      <div className='sc2'>
        <p id="off">Offers and Deals</p>
      </div>
      </center>
    <div id="hbox">
      <center>
        
        <p className='name'>Fresh Fruits and Vegetables</p>
         <div className='container'>
          <img className="image" src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg"></img>
          <div className='text-block'>
         <p>Upto 25% Discount </p>
         </div>
         </div>

         <p className='name'>Dairy Products</p>
<Link to="/Dairy">
         <div className='container'>
          <img className="image" src="https://www.ucdavis.edu/sites/default/files/styles/sf_landscape_16x9/public/images/article/milk-cheese-yogurt.jpg?h=56d53079&itok=JYtxxYul"></img>
          <div className='text-block'>
         <p>Upto 25% Discount </p>
         </div>
         </div>
         </Link>
 <Link to="/Beverages">
         <p className='name'>Cool drinks</p>
         <div className='container'>
          <img className="image" src="https://5.imimg.com/data5/SELLER/Default/2020/10/FP/GL/OA/521830/soft-drinks.jpg"></img>
          <div className='text-block'>
         <p>Upto 10% Discount </p>
         </div>
         </div>
         </Link>
         </center>
    </div>
    <div className='footer'>
      <div id="fbox1">
        <p id="fehead">Contact</p>
        <a href="" id="fcon">Call Center</a>
        <br></br>
        <a href="" id="fcon">Email Us</a>
        <br></br>
        <a href="" id="fcon">Help Center</a>
      </div>
      <div id="fbox2">
        <p id="fehead">Support & Resources</p>
        <a href="" id="fcon">Support</a>
        <br></br>
        <a href="" id="fcon">FAQ</a>
        <br></br>
        <a href="" id="fcon">Terms and Conditions</a>
        <br></br>
        <a href="" id="fcon">Help & Support</a>

      </div>
      <div id="fbox3">
        <p id="fehead">About</p>
        <a href="" id="fcon">About us</a>
        <br></br>
        <a href="" id="fcon">Terms and Policy</a>
        <br></br>
        <a href="" id="fcon">Community</a>
      </div>
      <center>
      <div className="hhr"></div>
      <p id="fbot">@Copyrights.All rights reserved</p>
      </center>
    
    </div> 
     


    </nav>
    
  );
  }


  
