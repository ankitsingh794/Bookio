import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Badge,
  IconButton,
} from '@mui/material';
import {
  ShoppingCart,
  Assignment,
  Message,
  People,
  Settings,
  Help,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { text: 'Orders', icon: <ShoppingCart />, path: '/admin/orderdetails' },
  { text: 'Events', icon: <Assignment />, path: '/admin/events' },
  { text: 'FeedBacks', icon: <Message />, path: '/admin/feedbacks', badge: 4 },
  { text: 'Users', icon: <People />, path: '/admin/userlists' },
  { text: 'Support', icon: <Help />, path: '/admin/support' },
  { text: 'Settings', icon: <Settings />, path: '/admin/settings' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "absolute", // <-- changed from "fixed"
            top: 16,
            left: 16,
            zIndex: 1400,
            color: "#7DF9FF",
            background: "#111827",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(125,249,255,0.08)",
          }}
          aria-label="Open sidebar"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        classes={{ paper: "sidebar-paper" }}
        sx={{
          width: isMobile ? "100vw" : 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMobile ? "100vw" : 250,
            boxSizing: 'border-box',
            backgroundColor: '#0a0a23',
            color: '#7DF9FF',
            borderRight: '1px solid rgba(125, 249, 255, 0.15)',
            boxShadow: '0 0 20px rgba(125, 249, 255, 0.1)',
            zIndex: 1400,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            fontFamily: '"Rouge Script", cursive',
            fontWeight: 'bold',
            fontSize: isMobile ? '2.2rem' : '4rem',
            textAlign: 'center',
            color: '#7DF9FF'
          }}
        >
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');`}
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
              onClick={() => isMobile && setOpen(false)}
            >
              <ListItem
                button
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
                  fontSize: isMobile ? "1rem" : undefined,
                  minHeight: isMobile ? 44 : undefined,
                  padding: isMobile ? "0.5rem 1rem" : undefined,
                }}
              >
                <ListItemIcon sx={{ color: '#7DF9FF', minWidth: isMobile ? 36 : undefined, fontSize: isMobile ? "1.3rem" : undefined }}>
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
                    sx: {
                      color: '#7DF9FF',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: isMobile ? "1rem" : undefined,
                    },
                  }}
                />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
