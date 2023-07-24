// import * as React from 'react';
// import {Link} from "react-router-dom"

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import './Feedback.css'
// import IconButton from '@mui/material/IconButton';
// import { Avatar } from '@mui/material';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// const FeedbackForm = ({ feedback, updateFeedback }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     console.log(feedback);
//   };

//   const handleFeedbackChange = (e) => {
//     updateFeedback(e.target.value);
//   };
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };


  
  


//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar sx={{ bgcolor: 	"#333",height:'70px' }} id="bs" position="fixed">
//         <Toolbar>



// <ul id="ulis">
//   <li id="lis"><Link to="/Home"><a href="#home" className='ha'>Home</a></Link></li>
//   <li id="lis"><Link to="/Product"><a href="#news" className='ha'>Products</a></Link></li>
  
//   <li class="dropdown" id="lis">
//     <Link to="/Category">
//     <a href="javascript:void(0)"  class="dropbtn">Category</a></Link>
//     <div class="dropdown-content">
//       <Link to="/Vegetables">
//       <a href="#" id="vactive">Vegetables</a></Link>
//       <Link to="/Beverages">
//       <a href="#">Cool drinks and beverages</a></Link>
//       <Link to="/Dairy">
//       <a href="#">Dairy products</a></Link>
//       <Link to="/Healthdrinks">
//       <a href="#">Health drinks</a></Link>
//       <a href="#">Fruits</a>
//       <a href="#">BabyCare products</a>
//     </div>
//   </li>
//   <li id="lis"><a href="#news" className='ha' id="hactive">Feedback</a></li>
//   <li id="lis"><Link to="/CartPage"><a href="#news" className='ha'>Cart</a></Link></li>
// </ul>



//           {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Grocery
//           </Typography> */}
//          {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
//          <div class="log">
//          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//         {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
//         <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
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
      
      
       


  
//   <div id="fbox">
// <form onSubmit={handleSubmit}>
//       <h2 id="fhead">Feedback Form</h2>
//       <br></br>
//       <label id="title">Name:</label>
//       <input type="text" id="feedback"></input>
//       <br></br>
//       <br></br>
//       <label htmlFor="feedback" id="title">Your Feedback:</label>
//       <textarea id="feedback" />
//       <br></br>
//       <div className="fgroup">
//                   <input type="submit" className="fbutton" value="Submit Feedback" required/>
//                 </div>
//     </form>
//     </div>
//     <br></br>

    
   
//      </Box>
   
    
//   );
//   }
//    export default FeedbackForm;
















import { useState } from 'react'
import React from 'react';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/icons-material';
import './Feedback.css'
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const FeedbackForm = ({ feedback, updateFeedback }) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(feedback);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="fnavbar">
    <div className="fcontainer">
      <div className="fmenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`fnav-elements  ${showNavbar && 'factive'}`}>
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
          <li id="fcurrent">
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

    <br></br> <br></br> <br></br>
      <h2 id="fhead">Feedback Form</h2>
<div id="fbox">
<form onSubmit={handleSubmit}>
      <br></br>
      <label id="title">Name:</label>
      <input type="text" id="feedback"></input>
      <br></br>
      <br></br>
      <label id="title">Email:</label>
      <input type="text" id="feedback"></input>
      <br></br>
      <br></br>
      <label htmlFor="feedback" id="title">Comments:</label>
      <textarea id="feedback" />
      <br></br>
      <div className="fgroup">
                  <input type="submit" className="fbutton" value="Submit Feedback" required/>
                </div>
    </form>
    </div> 
   </nav>

  
  )
}

export default FeedbackForm













































































// import React from 'react';
// import './Feedback.css'
// import { connect } from 'react-redux';
// import { updateFeedback } from './actions';

// const FeedbackForm = ({ feedback, updateFeedback }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     console.log(feedback);
//   };

//   const handleFeedbackChange = (e) => {
//     updateFeedback(e.target.value);
//   };

//   return (

// <div id="fbox">
//     <form onSubmit={handleSubmit}>
//       <h2>Feedback Form</h2>
//       <br></br>
//       <label id="title">Name:</label>
//       <input type="text" id="feedback"></input>
//       <br></br>
//       <br></br>
//       <label htmlFor="feedback" id="title">Your Feedback:</label>
//       <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} />
//       <br></br>
//       <div className="fgroup">
//                   <input type="submit" className="fbutton" value="Submit Feedback" required/>
//                 </div>
//     </form>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   feedback: state.feedback,
// });

// const mapDispatchToProps = {
//   updateFeedback,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);