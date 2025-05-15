import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";
import './Style/Register.css';

const Register = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }
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
    <Box className="register-container">
      <Paper elevation={3} className="register-box">
        <Typography variant="h4" gutterBottom>Register</Typography>

        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Phone No" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <TextField label="Conirm Password" type="password" fullWidth margin="normal" />

        <Box className="otp-section">
          <Typography variant="subtitle1">OTP</Typography>
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
          <Button variant="contained" size="small" className="otp-btn">Get OTP</Button>
        </Box>

        <Button fullWidth variant="contained" className="register-btn">
          Register
        </Button>

        <Typography variant="body2" className="links">
          <a href="#">Forgot password?</a>
        </Typography>
        <Typography variant="body2" className="links">
          Already have an account? <a href="#">Login!</a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
