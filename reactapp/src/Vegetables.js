import * as React from 'react';
import {Link} from "react-router-dom"
import './Vegetables.css';
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
      name: 'Tomato',
      image: 'https://media.istockphoto.com/id/941825808/photo/tomato-isolated-tomato-on-white-background-with-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=FOo7yfEpxmdTHYBHVr2og-nE_m4mib32rYxZQxUARbs=',
      price: 50,
      description:' Per kg'
      },
      {
      id: 2,
      name: 'Potato',
      image: 'https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=',
      price: 40,
      description:' Per kg'
      },
      {
      id: 3,
      name: 'Cabbage',
      image: 'https://media.istockphoto.com/id/624925456/photo/green-cabbage-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_iABqhfVBvIv7dfpi270vWFZH0GNbzCS3L6ifvv7XYI=',
      price: 30,
      description:' Per kg'
      },
      {
      id: 4,
      name: 'carrot',
      image: 'https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858',
      price: 80,
      description:' Per kg'
      },
      {
      id: 5,
      name: 'Beetroot',
      image: 'https://bivianodirect.com.au/wp-content/uploads/2020/07/products-A6D0DF72-8722-474B-BA93-45071A0C7559_d66172ae-b946-4e93-9fd9-f72707da520a.jpg',
      price: 30,
      description:' Per kg'
      },
      {
      id: 6,
      name: 'Onion',
      image: 'https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg?im=Resize=(1000,1000)',
      price: 40,
      description:' Per kg'
      },
      {
      id: 7,
      name: 'Green Peas',
      image: 'https://www.jiomart.com/images/product/original/590004083/green-peas-500-g-product-images-o590004083-p590004083-0-202203171049.jpg?im=Resize=(1000,1000)',
      price: 30,
      description:' Per kg'
      },
      {
      id: 8,
      name: 'Cauliflower',
      image: 'https://www.jiomart.com/images/product/original/590003537/cauliflower-1-pc-approx-600-g-1000-g-product-images-o590003537-p590003537-0-202203170515.jpg?im=Resize=(1000,1000)',
      price: 60,
      description:' Per kg'
      },
      {
      id: 9,
      name: 'Capsicum',
      image: 'https://www.oifood.in/files/products/9f1114e47918b5a7a304cdbb60591a4b.jpg',
      price: 20,
      description:' Per kg'
      },
      {
      id: 10,
      name: 'Brinjal',
      image: 'https://5.imimg.com/data5/VK/ZF/GE/SELLER-50068616/brinjal.jpeg',
      price: 30,
      description:' Per kg'
      },
      {
      id: 11,
      name: 'Broccoli',
      image: 'https://www.luluhypermarket.in/medias/8282-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzgwNTJ8aW1hZ2UvanBlZ3xhR00xTDJnM1pDODRPRFV4TURRNE1EY3hNVGs0THpneU9ESXRNREV1YW5Cblh6RXlNREJYZURFeU1EQkl8OTVhNWFkYzg1MzBiYTZhMTIyNGRkNzk3MTdmYmNjMTVlOTBkZDViNzJjMjkzZDVjYWJhMjQwOWVmNWY1ZTk1Yw',
      price: 50,
      description:' Per kg'
      },
      {
      id: 12,
      name: 'Garlic',
      image: 'https://cdnprod.mafretailproxy.com/sys-master-root/hcd/h80/33220780359710/10321_main.jpg_480Wx480H',
      price: 50,
      description:' Per kg'
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
    <nav className="vnavbar">
    <div className="vcontainer">
      <div className="vmenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`vnav-elements  ${showNavbar && 'vactive'}`}>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
          <li id="vcurrent">
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


 
   <div id="vbox">
    <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={4} key={product.id}>
            <Card>
              <CardMedia style={{border:"4px solid white",width:"250px"}}component="img" height="250" src={product.image} alt={product.name} />
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
   