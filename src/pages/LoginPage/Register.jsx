import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";
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
    <Box className="register-container" style={{color:'#FFFFFF'}}>
      <Paper elevation={3} className="register-box" style={{color:'#FFFFFF'}}>
        <Typography variant="h4" style={{color:'#FFFFFF'}} gutterBottom>Register</Typography>

        <TextField label="Email" fullWidth margin="normal" style={{color:'#FFFFFF'}}/>
        <TextField label="Phone No" fullWidth margin="normal" style={{color:'#FFFFFF'}}/>
        <TextField label="Password" type="password" fullWidth margin="normal" style={{color:'#FFFFFF'}}/>
        <TextField label="Conirm Password" type="password" fullWidth margin="normal" style={{color:'#FFFFFF'}}/>

        <Box className="otp-section">
          <Typography variant="subtitle1" style={{color:'#FFFFFF'}} >OTP</Typography>

          {showOtp && (
            <>
              <Box className="otp-inputs" style={{color:'#FFFFFF'}} >
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

              <Button
                variant="contained"
                size="small"
                className="otp-btn"
                style={{ marginRight: "39px" ,color:'#FFFFFF'}}
                
              >
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
                // triggerOtpSend(); <-- call your API here
              }}
              className="otp-btn"
              style={{ marginTop: "10px", color:'#FFFFFF' }}
            >
              Get OTP
            </Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                // triggerOtpSend(); <-- call your API again
              }}
              className="otp-btn-resend-btn"
              style={{color:'#FFFFFF'}}
            >
              Resend OTP
            </Button>
          )}
        </Box>

        <Button fullWidth variant="contained" className="register-btn" style={{color:'#FFFFFF'}}>
          Register
        </Button>

        <Typography variant="body2" className="links" style={{color:'#FFFFFF'}}>
          <Link to="/loghub/forgot-password" style={{color:'#FFFFFF', cursor: 'pointer'}} >Forgot password?</Link>
        </Typography>
        <Typography variant="body2" className="links" style={{color:'#FFFFFF'}}>
          Already have an account? <a href="#" style={{color:'#FFFFFF'}}>Login!</a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
