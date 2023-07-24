import * as React from 'react';
import {Link} from "react-router-dom"
import './Dairy.css';
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
      name: 'Milk',
      image: 'https://ik.imagekit.io/dunzo/1650547152150_product_5c2638fbbbc7ac725f291df3_1.jpg',
      price: 24,
      description:'Per packet(500ml)'
      },
      {
      id: 2,
      name: 'Cheese',
      image: 'https://dlecta.com/cdn/shop/products/CheeseSlices-200Gms-1.jpg?v=1641562938',
      price: 165,
      description:'Per packet(10 slices)'
      },
      {
      id: 3,
      name: 'Icecream',
      image: 'https://m.media-amazon.com/images/I/51+NnTLP0-L.jpg',
      price: 175,
      description:'Per packet(500gm)'
      },
      {
      id: 4,
      name: 'Buttermilk',
      image: 'https://www.bigbasket.com/media/uploads/p/l/161899-2_9-amul-masti-buttermilk-spice.jpg',
      price: 15,
      description:'Per packet(250ml)'
      },
      {
      id: 5,
      name: 'Ghee',
      image: 'https://www.bigbasket.com/media/uploads/p/l/257871_4-heritage-cow-ghee.jpg',
      price: 691,
      description:'Per packet(1L)'
      },
      {
      id: 6,
      name: 'Butter',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40006899-2_6-amul-cooking-butter-unsalted.jpg',
      price: 275,
      description:'Per packet(500gm)'
      },
      {
      id: 7,
      name: 'Curd',
      image: 'https://www.bigbasket.com/media/uploads/p/l/60000388_3-hatsun-cup-curd.jpg',
      price: 40,
      description:'Per packet(200gm)'
      },
      {
      id: 8,
      name: 'Milk Powder',
      image: 'https://d33su1nl84sq93.cloudfront.net/wp-content/uploads/2022/10/Amul-Sagar-Simmed-Milk-Powder-Pouch-1-kg.jpg',
      price: 155,
      description:'Per packet(500gm)'
      },
      {
      id: 9,
      name: 'Sour cream',
      image: 'https://productimages.coles.com.au/productimages/3/3676946.jpg',
      price: 150,
      description:'Per packet(300gm)'
      },
      // {
      // id: 10,
      // name: 'Pickle',
      // image: 'https://dookan.com/cdn/shop/products/1FoySO186KbTeUS7KlObpiC_GI4n9tsyl_c966d8fc-7443-4454-acc2-faccb5a9a967.png?v=1678835560',
      // price: 36,
      // },
      // {
      // id: 11,
      // name: 'Pepper Powder',
      // image: 'https://tejumasala.com/cdn/shop/products/BLACKPEPPER_1024x1024.png?v=1646483230',
      // price: 32,
      // },
      // {
      // id: 12,
      // name: 'Vineger',
      // image: 'https://5.imimg.com/data5/QV/ZY/VC/SELLER-87918828/white-vinegar.jpg',
      // price: 50,
      // },
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
    <nav className="dnavbar">
    <div className="dcontainer">
      <div className="dmenu-icon" onClick={handleShowNavbar}>
     <MenuIcon></MenuIcon>
      </div>
      <div className={`dnav-elements  ${showNavbar && 'dactive'}`}>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
          <li id="dcurrent">
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

 
 
   

    <div id="dbox">
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
                ₹{product.price} {product.description}
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
                  value={productQuantities[product.id] || 1} // Use the selected quantity or default to 1 if not set
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
  