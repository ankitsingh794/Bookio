import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Badge,
} from '@mui/material';
import {
  Dashboard,
  ShoppingCart,
  Assignment,
  Message,
  People,
  Settings,
  Help,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { text: 'Orders', icon: <ShoppingCart />, path: '/admin/orderdetails' },
    { text: 'Events', icon: <Assignment />, path: '/admin/events' },
    { text: 'FeedBacks', icon: <Message />, path: '/admin/feedbacks', badge: 4 },
    { text: 'Users', icon: <People />, path: '/admin/userlists' },
    { text: 'Support', icon: <Help />, path: '/admin/support' },
    { text: 'Settings', icon: <Settings />, path: '/admin/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: '#0a0a23',
          color: '#7DF9FF',
          borderRight: '1px solid rgba(125, 249, 255, 0.15)',
          boxShadow: '0 0 20px rgba(125, 249, 255, 0.1)',
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          fontFamily: '"Rouge Script", cursive',
          fontWeight: 'bold',
          fontSize: '4rem',
          textAlign: 'center',
          color: '#7DF9FF'
        }}
      >
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');
        </style>
        Bookio
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(125, 249, 255, 0.2)' }} />
      <List>
      {menuItems.map((item, idx) => (
        <NavLink
          to={item.path}
          key={idx}
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
            <ListItem
              button
              key={idx}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(125, 249, 255, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(125, 249, 255, 0.18)',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(125, 249, 255, 0.25)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#7DF9FF' }}>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="primary">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: { color: '#7DF9FF', fontFamily: 'Poppins, sans-serif' },
                }}
              />
            </ListItem>
          
        </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
