import React from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import './Style/Login.css';

const Login = () => {
    return (
        <Box className="login-container">
            <Paper elevation={3} className="login-box">
                <Typography variant="h4" gutterBottom>Login</Typography>

                <TextField label="Email or Phone no" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />

                <Button fullWidth variant="contained" className="login-btn">
                    Login
                </Button>

                <Typography variant="body2" className="links">
                    <a href="#">Forgot password?</a>
                </Typography>
                <Typography variant="body2" className="links">
                    New to our platform? <a href="#">Register!</a>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
