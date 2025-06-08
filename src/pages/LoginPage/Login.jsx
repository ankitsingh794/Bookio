import React from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import './Style/Login.css';

const Login = () => {
    return (
        <Box className="login-container space-bg">
            <Paper elevation={6} className="login-box glass-effect">
                <Typography variant="h4" className="login-title">
                    Login
                </Typography>

                <TextField
                    label="Email or Phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />

                <Button fullWidth variant="contained" className="login-btn">
                    Login
                </Button>

                <Typography variant="body2" className="links">
                    <a href="#">Forgot password?</a>
                </Typography>
                <Typography variant="body2" className="links">
                    New to our app? <a href="#">Register</a>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
