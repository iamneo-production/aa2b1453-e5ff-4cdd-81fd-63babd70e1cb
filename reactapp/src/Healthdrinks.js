import * as React from 'react';
import {Link} from "react-router-dom"
import './Healthdrinks.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
const Product = ({ addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems,] = useState([]);


  const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product




  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


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

  const handleQuantityChange = (event, productId) => {
    const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
    setProductQuantities(newQuantities);
  };


  const products = [
     
    {
      id: 1,
      name: 'Boost',
      image: 'https://images.apollo247.in/pub/media/catalog/product/b/o/boo0005_0806_1.jpg',
      price: 299,
      description:' Per box(450gm)'
      },
      {
      id: 2,
      name: 'Horlicks',
      image: 'https://ritikart.com/cdn/shop/products/horlicks-classic-malt-health-drink-powder-500-gm-0-20200518.jpg?v=1593239957',
      price: 229,
      description:' Per box(500gm)'
      },
      {
      id: 3,
      name: 'Complan',
      image: 'https://m.media-amazon.com/images/I/61cgT9453KL.jpg',
      price: 300,
      description:' Per bottle(500gm)'
      },
      {
      id: 4,
      name: 'Bournvita',
      image: 'https://sabkooch.com/wp-content/uploads/2020/09/61XhlsB3NCL._SL1500_.jpg',
      price: 228,
      description:' Per bottle(500gm)'
      },
      {
      id: 5,
      name: 'Pediasure',
      image: 'https://5.imimg.com/data5/KE/AU/EG/SELLER-7715095/abbott-pediasure-catch-up-growth-complete-balance-nutrition-powder.jpg',
      price: 560,
      description:' Per box(400gm)'
      },
      {
      id: 6,
      name: 'Ensure',
      image: 'https://images.apollo247.in/pub/media/catalog/product/6/7/673952_4.jpg',
      price: 440,
      description:' Per box(200gm)'
      },
      {
      id: 7,
      name: 'Protinex',
      image: 'https://omhealthcart.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/O/R/ORIGNL.JPG',
      price: 575,
      description:' Per box(400gm)'
      },
      {
      id: 8,
      name: 'Nestle Milo',
      image: 'https://prod-admin-images.s3.ap-south-1.amazonaws.com/M7-PiV2mzeGMI65vu3d9/product/milo%20400g%20Thumbnail.png',
      price: 550,
      description:' Per box(1kg)'
      },
      {
      id: 9,
      name: 'Glucon D',
      image: 'https://cdn01.pharmeasy.in/dam/products_otc/T04453/glucon-d-instant-energy-health-drink-tangy-orange-400gm-jar-6.1-1677525568.jpg',
      price: 135,
      description:' Per bottle(450gm)'
      },
     
    ];

    const handleAddToCart = (product) => {
      addToCart(product); // Call the addToCart function from props
      
          const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
          const item = { ...product, quantity };
          addToCart(item);
        };
    
    

    
    
    
    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);




  return (
    <nav className="henavbar">
    <div className="hecontainer">
      <div className="hemenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`henav-elements  ${showNavbar && 'heactive'}`}>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
          <li id="hecurrent">
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
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
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


  
  
   <div id="hebox">
  <Grid  container spacing={2} align="center" >
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={3} md={4} key={product.id}>
          <Card>
            <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h9" component="div">
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
              ₹{product.price}{product.description}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography> */}
            </CardContent>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>

              <TextField
                type="number"
                id="quanbox"
                label="Quantity"
                variant="outlined"
                value={productQuantities[product.id] || 1} 
                onChange={(event) => handleQuantityChange(event, product.id)}
                inputProps={{ min: 1 }}
                sx={{ width: '80px', mr: 2 }}
              />
            <Button id="addtocart" sx={{color:'white'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
  <br></br> 





  
  <br></br>
      </nav>

   
    
  );
  }
  export default Product;
  
 