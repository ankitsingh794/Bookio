import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import { Dashboard, ShoppingCart, Assignment, Message, People, Settings, Help } from '@mui/icons-material';
import './Style/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Orders', icon: <ShoppingCart /> },
    { text: 'Tasks', icon: <Assignment /> },
    { text: 'Messages', icon: <Message />, badge: 4 },
    { text: 'Users', icon: <People /> },
    { text: 'Support', icon: <Help /> },
    { text: 'Settings', icon: <Settings /> },
  ];

  return (
    <Drawer variant="permanent" className="sidebar" classes={{ paper: 'sidebar-paper' }}>
      <Box sx={{ p: 2, color: '#000000' ,fontFamily: 'cursive',fontSize: '3rem' }}>Bookio</Box>
      <Divider />
      <List>
        {menuItems.map((item, idx) => (
          <ListItem component="button" key={idx}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* Bottom space usage & profile like in your image */}
    </Drawer>
  );
};

export default Sidebar;
