import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";

import './Style/Login.css';

const Login = () => {
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
        <Box className="login-container">
            <Paper elevation={3} className="login-box">
                <Typography variant="h4" gutterBottom>Login</Typography>

                <TextField label="Email or Phone no" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />


                <Box className="otp-section">
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

                            <Button
                                variant="contained"
                                size="small"
                                className="otp-btn"
                                style={{ marginRight: "39px" }}
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
                            style={{ marginTop: "10px" }}
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
                        >
                            Resend OTP
                        </Button>
                    )}
                </Box>


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
