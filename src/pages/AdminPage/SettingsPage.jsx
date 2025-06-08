import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Divider,
  Paper
} from '@mui/material';

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890'
  });

  const [themeMode, setThemeMode] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!');
  };

  const handlePasswordUpdate = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New password and confirm password do not match!');
      return;
    }
    alert('Password changed successfully!');
  };

  const toggleTheme = () => {
    setThemeMode(prev => !prev);
    alert(`To be added soon...!!!!`);
  };

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
      backgroundColor: 'transparent',
      color: '#FFFFFF'
    },
    section: {
      backgroundColor: '#0a0a23',
      padding: '2rem',
      marginBottom: '2rem',
      borderRadius: '16px',
      boxShadow: '0 0 30px rgba(125, 249, 255, 0.1)',
      border: '1px solid rgba(125, 249, 255, 0.15)'
    },
    title: {
      marginBottom: '2rem',
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    heading: {
      color: '#FFFFFF',
      marginBottom: '1rem'
    },
    input: {
      '& .MuiInputBase-root': {
        color: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFFFFF'
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFFFFF'
      },
      '& .MuiInputLabel-root': {
        color: '#FFFFFF'
      }
    },
    button: {
      backgroundColor: '#FFFFFF',
      color: '#0a0a23',
      fontWeight: 600,
      mt: 2,
      '&:hover': {
        backgroundColor: '#00e6ff'
      }
    },
    divider: {
      my: 3,
      backgroundColor: '#444'
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>Settings</Typography>

      {/* Profile Section */}
      <Paper sx={styles.section}>
        <Typography variant="h6" sx={styles.heading}>Profile Information</Typography>
        <TextField
          label="Full Name"
          name="name"
          value={profile.name}
          onChange={handleProfileChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Phone"
          name="phone"
          value={profile.phone}
          onChange={handleProfileChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <Button variant="contained" sx={styles.button} onClick={handleProfileUpdate}>
          Update Profile
        </Button>
      </Paper>

      <Divider sx={styles.divider} />

      {/* Preferences */}
      <Paper sx={styles.section}>
        <Typography variant="h6" sx={styles.heading}>Preferences</Typography>
        <FormControlLabel
          control={<Switch checked={themeMode} onChange={toggleTheme} />}
          label={themeMode ? 'Day Time' : 'Night Time'}
          sx={{ color: '#Ffffff' }}
        />
      </Paper>

      <Divider sx={styles.divider} />

      {/* Password Section */}
      <Paper sx={styles.section}>
        <Typography variant="h6" sx={styles.heading}>Change Password</Typography>
        <TextField
          label="Current Password"
          name="current"
          type="password"
          value={passwords.current}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="New Password"
          name="new"
          type="password"
          value={passwords.new}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <TextField
          label="Confirm New Password"
          name="confirm"
          type="password"
          value={passwords.confirm}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          sx={styles.input}
        />
        <Button variant="contained" sx={styles.button} onClick={handlePasswordUpdate}>
          Change Password
        </Button>
      </Paper>
    </Box>
  );
};

export default SettingsPage;
