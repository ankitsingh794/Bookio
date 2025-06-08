import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import './Style/Register.css';

const Register = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

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

  return (
    <Box
      className="register-container"
      sx={{ position: 'relative', zIndex: 10, color: '#FFFFFF' }}
    >
      <Paper
        elevation={3}
        className="register-box"
        sx={{ position: 'relative', zIndex: 10, color: '#FFFFFF' }}
      >
        <Typography variant="h4" gutterBottom>Register</Typography>

        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Phone No" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" fullWidth margin="normal" />

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

              <Button variant="contained" size="small" className="otp-btn">
                Verify
              </Button>
            </>
          )}

          {!otpSent ? (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setShowOtp(true);
                setOtpSent(true);
                // Call your OTP API here
              }}
              className="otp-btn"
              sx={{ mt: 1 }}
            >
              Get OTP
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                // Resend OTP API
              }}
              className="otp-btn-resend-btn"
            >
              Resend OTP
            </Button>
          )}
        </Box>

        <Button fullWidth variant="contained" className="register-btn">
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
