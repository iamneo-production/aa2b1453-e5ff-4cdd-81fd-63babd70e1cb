// import React from 'react';
// import './CartPage.css'
// const CartPage = ({ cartItems, removeFromCart }) => {
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div>
//     <div className='cart'>
//       <h1>Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div><center>
//           {cartItems.map((item) => (
//             <div id="row">
//             <div key={item.id}>
//               <div id="block">
//               <h3>{item.name}</h3></div>
//               <div id="block">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{border:'4px solid black', maxWidth: '150px', maxHeight: '150px' }}
//                 />
//               </div>
//               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//               <div id="block">
//               <p className='tt'>Price: {item.price}</p></div>
//               <div id="block">
//               <button className='bt' style={{backgroundColor:'black',color:'white' }} onClick={() => removeFromCart(item.id)}>Remove</button></div>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
             
             
//             </div>
//             </div>
//           ))}</center>
//           <p className='tt'>Total Price: {getTotalPrice()}</p>
//     <button className='button'>
//       Proceed for Checkout
//     </button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default CartPage;





import * as React from 'react';
import {Link} from "react-router-dom"
import './Product.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState,useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './CartPage.css'
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
const CartPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // const [cartItems, setCartItems,] = useState([]);

 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 







  return (
    <nav className="cnavbar">
      <div className="ccontainer">
        <div className="cmenu-icon" onClick={handleShowNavbar}>
       <MenuIcon></MenuIcon>
        </div>
        <div className={`cnav-elements  ${showNavbar && 'cactive'}`}>
          <ul>
            <li>
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
            <li id="current">
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

      <div id="cabox">
  
  <div className='cart'>
  
        {cartItems.length === 0 ? (
          <center><p id="emcart">Your cart is empty</p></center>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div id="row">
              <div key={item.id}>
                <div id="nblock">
                <h3>{item.name}</h3></div>
                <div id="iblock">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{border:'2px solid black', maxWidth: '100px', maxHeight: '120px' }}
                  />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div id="pblock">
                <p>Price: ₹{item.price}/-</p></div>
                <div id="pblock">
                <p>Quantity: {item.quantity}</p> </div>
                <div id="rblock">
                <button className='bt' style={{backgroundColor:'black',color:'white' }} onClick={() => removeFromCart(item.id)}>Remove</button></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
               
              </div>
              </div>
            ))}
            <p className='tt'>Total Price: ₹{getTotalPrice()}</p>
      <button className='probutton'>
        Make Payment
      </button>
          </div>
        )}
      </div>
  
  
  
    
      
      </div>
  


   
     

 


  
    
    <br></br>
        </nav>

    
  
   
  
  
   
    
  );
  }

  export default CartPage;


































//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar sx={{ bgcolor: 	"#333",height:'70px' }} id="bs" position="fixed">
//         <Toolbar>
  
       


// <ul id="ulis">
//   <li id="lis"><Link to="/Home"><a href="#home" className='ha'>Home</a></Link></li>
//   <li id="lis"><Link to="/Product"><a href="#news" className='ha' >Products</a></Link></li>
  
//   <li class="dropdown" id="lis">
//     <Link to="/Category">
//     <a href="a"  class="dropbtn">Category</a></Link>
//     <div class="dropdown-content">
//     <Link to="/Vegetables">
//       <a href="a">Vegetables</a></Link>
//       <Link to="/Beverages">
//       <a href="a">Cool drinks and beverages</a></Link>
//       <Link to="/Dairy">
//       <a href="a">Dairy products</a></Link>
//       <Link to="/Healthdrinks">
//       <a href="a">Health drinks</a></Link>
//       <a href="a">Fruits</a>
//       <a href="a">BabyCare products</a>
//     </div>
//   </li>
//   <li id="lis"><Link to="/FeedbackForm"><a href="#news" className='ha'>Feedback</a></Link></li>
//   <li id="lis"><Link to="/CartPage"><a href="#news" className='ha' id="hactive">Cart </a></Link></li>
// </ul>



      
//          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//          <div class="log">
//          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//         <Tooltip title="Account settings">
          
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
            
//             <Avatar sx={{ width: 40, height: 40 ,bgcolor: "green"}} id="avatar">D</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//          <Link to="/">Logout</Link>
//         </MenuItem>
//       </Menu>
//           </div>
   
//           {/* <Button color="inherit">Login</Button> */}
//         </Toolbar>
//         <br></br>
//         <br></br>
//       </AppBar>
      
      

  
  
//     <div id="cabox">
  
// <div className='cart'>

//       {cartItems.length === 0 ? (
//         <center><p id="emcart">Your cart is empty</p></center>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div id="row">
//             <div key={item.id}>
//               <div id="nblock">
//               <h3>{item.name}</h3></div>
//               <div id="iblock">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{border:'2px solid black', maxWidth: '100px', maxHeight: '120px' }}
//                 />
//               </div>
//               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//               <div id="pblock">
//               <p>Price: ₹{item.price}/-</p></div>
//               <div id="pblock">
//               <p>Quantity: {item.quantity}</p> </div>
//               <div id="rblock">
//               <button className='bt' style={{backgroundColor:'black',color:'white' }} onClick={() => removeFromCart(item.id)}>Remove</button></div>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
             
             
//             </div>
//             </div>
//           ))}
//           <p className='tt'>Total Price: ₹{getTotalPrice()}</p>
//     <button className='probutton'>
//       Make Payment
//     </button>
//         </div>
//       )}
//     </div>



  
    
//     </div>
//     <br></br>

    
   
//     </Box>
   
    
//   );