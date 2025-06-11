import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import './Style/Register.css';
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index] === "") {
        if (index > 0) {
          const prevInput = e.target.previousSibling;
          newOtp[index - 1] = "";
          setOtp(newOtp);
          prevInput.focus();
        }
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // Send OTP API call
  const sendOtp = async () => {
    if (!formData.email) {
      alert("Please enter your email first.");
      return;
    }

    try {
      await axios.post("/api/otp/send-otp", { email: formData.email });
      setShowOtp(true);
      setOtpSent(true);
      alert("OTP sent to your email.");
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP.");
    }
  };

  // Verify OTP API call
  const verifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      await axios.post("/api/otp/verify-otp", {
        email: formData.email,
        otp: otpCode,
      });
      setOtpVerified(true);
      alert("OTP verified successfully. You can now register.");
    } catch (error) {
      console.error(error);
      alert("Invalid OTP or verification failed.");
    }
  };

  // Register user API call (simplified - add your own endpoint)
  const registerUser = async () => {
    if (!otpVerified) {
      alert("Please verify OTP first.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      // Add your registration API call here
      const res = await axios.post("/api/auth/register", formData);
      alert("Registration successful!");
      // Redirect or reset form as needed
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    }
  };

  return (
    <Box className="register-container" sx={{ position: 'relative', zIndex: 10, color: 'transparent`' }}>
      <Paper elevation={3} className="register-box" sx={{ position: 'relative', zIndex: 10, backgroundColor: 'transparent' }}>
        <Typography variant="h4" gutterBottom>Register</Typography>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Phone No"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          fullWidth margin="normal"
        />

        <Box className="otp-section" sx={{ position: 'relative', zIndex: 10 }}>
          <Typography variant="subtitle1">OTP</Typography>

          {showOtp && (
            <>
              <Box className="otp-inputs">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-box"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </Box>

              <Button variant="contained" size="small" className="otp-btn" onClick={verifyOtp}>
                Verify
              </Button>
            </>
          )}

          {!otpSent ? (
            <Button
              variant="contained"
              size="small"
              onClick={sendOtp}
              className="otp-btn"
              sx={{ mt: 1 }}
            >
              Get OTP
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              onClick={sendOtp}
              className="otp-btn-resend-btn"
            >
              Resend OTP
            </Button>
          )}
        </Box>

        <Button
          fullWidth
          variant="contained"
          className="register-btn"
          onClick={registerUser}
          disabled={!otpVerified}
        >
          Register
        </Button>

        <Typography variant="body2" className="links">
          <Link to="/loghub/forgot-password">Forgot password?</Link>
        </Typography>
        <Typography variant="body2" className="links">
          Already have an account? <Link to="/loghub/login">Login!</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
