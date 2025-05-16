import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, Switch, Divider, Paper } from '@mui/material';
import './Style/SettingsPage.css';

const SettingsPage = () => {
    const [profile, setProfile] = useState({ name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' });
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
        alert(`Switched to ${!themeMode ? 'Dark' : 'Light'} Mode`);
    };

    return (
        <Box className="settings-container">
            <Typography variant="h4" className="settings-title">Settings</Typography>

            <Paper className="settings-section">
                <Typography variant="h6">Profile Information</Typography>
                <TextField
                    label="Full Name"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" onClick={handleProfileUpdate}>Update Profile</Button>
            </Paper>

            <Divider sx={{ my: 3 }} />

            <Paper className="settings-section">
                <Typography variant="h6">Preferences</Typography>
                <FormControlLabel
                    control={<Switch checked={themeMode} onChange={toggleTheme} />}
                    label="Dark Mode"
                />
            </Paper>

            <Divider sx={{ my: 3 }} />

            <Paper className="settings-section">
                <Typography variant="h6">Change Password</Typography>
                <TextField
                    label="Current Password"
                    name="current"
                    type="password"
                    value={passwords.current}
                    onChange={handlePasswordChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="New Password"
                    name="new"
                    type="password"
                    value={passwords.new}
                    onChange={handlePasswordChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Confirm New Password"
                    name="confirm"
                    type="password"
                    value={passwords.confirm}
                    onChange={handlePasswordChange}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handlePasswordUpdate}>Change Password</Button>
            </Paper>
        </Box>
    );
};

export default SettingsPage;
