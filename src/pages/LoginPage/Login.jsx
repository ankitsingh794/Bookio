import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import './Style/Login.css';
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailOrPhone: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async () => {
    if (!loginData.emailOrPhone || !loginData.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post("/api/auth/login", {
        emailOrPhone: loginData.emailOrPhone,
        password: loginData.password
      });
      alert("Login successful!");


      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.error || "Login failed");
    }
  };

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
          name="emailOrPhone"
          value={loginData.emailOrPhone}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff' } }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff' } }}
        />

        <Button
          fullWidth
          variant="contained"
          className="login-btn"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" className="links" sx={{ mt: 2 }}>
          <Link to={'/loghub/forgot-password'}>Forgot password?</Link>
        </Typography>
        <Typography variant="body2" className="links">
          New to our app? <Link to={'/loghub/register'}>Register</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
