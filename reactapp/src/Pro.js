import React from 'react'
import { useState ,useEffect } from 'react';
import './Pro.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
const Pro = ({ addToCart }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems,] = useState([]);
  
  
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

    const products = [
        {
          id: 1,
          name: 'Noodles',
          image: "https://m.media-amazon.com/images/I/51KuBTBZo4L.jpg",
          price: "Rs.12",
        
        },
        {
          id: 2,
          name: 'Orchid Plant',
          image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 899,
         
        },
        {
          id: 3,
          name: 'Bonsai Tree',
          image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 1299,
          
        },
        {
          id: 4,
          name: 'Sunflower Seeds',
          image:"https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 199,
          
        },
        {
          id: 5,
          name: 'Herb Garden Kit',
          image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 799,
         
        },
        {
          id: 6,
          name: 'Herb Garden Kit',
          image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 799,
         
        },
        {
          id: 7,
          name: 'Herb Garden Kit',
          image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
          price: 799,
         
        },
      
      ];
      const handleAddToCart = (product) => {
        addToCart(product); // Call the addToCart function from props
      };
      
      
      
      
      const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
      };

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
      <div>
       <Link to="/CartPage"> <ShoppingCartIcon style={{height:"20px",width:"20px"}}/></Link>
       <div className='probox'>
       
        <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={2} key={product.id}>
            <Card>
              <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h9" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Button sx={{color:'red'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  )
}

export default Pro