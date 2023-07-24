import React from 'react';
import { Avatar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const Profile = () => {
  // Replace these dummy data with actual user details fetched from your application
  const user = {
    name: 'Dhanush',
    email: 'dhanush001@gmail.com',
    profileImageUrl: 'https://example.com/profile-image.jpg',
    age: 18,
    role:'User',
    phone:9361145853,
    // Add more user data as needed
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar src={user.profileImageUrl} alt={user.name} sx={{ width: 120, height: 120, mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Name: {user.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Age: {user.age}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Role: {user.role}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Phone: {user.phone}
        </Typography>
        {/* Add more user details here */}
      </div>
      <Divider sx={{ my: 4 }} />
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon, e.g., <PersonIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon, e.g., <ShoppingCartIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Order History" />
          </ListItem>
          {/* Add more profile options, e.g., settings, addresses, payment methods, etc. */}
        </List>
      </div>
    </div>
  );
};

export default Profile;