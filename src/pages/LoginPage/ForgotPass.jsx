import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import './Style/ForgotPass.css';

const ForgPass = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [showOtp, setShowOtp] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.nextSibling) element.nextSibling.focus();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            if (otp[index] === "" && index > 0) {
                newOtp[index - 1] = "";
                setOtp(newOtp);
                e.target.previousSibling?.focus();
            } else {
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    return (
        <Box className="forgot-container space-bg">
            <Paper elevation={6} className="forgot-box glass-effect">
                <Typography variant="h4" gutterBottom className="forgot-title">
                    Forgot Password?
                </Typography>

                <TextField
                    label="Email or Phone Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />

                <Button fullWidth variant="contained" className="forgot-btn">
                    Send OTP
                </Button>

                <Box className="otp-section">
                    <Typography variant="subtitle1" gutterBottom className="otp-label">
                        Enter OTP
                    </Typography>

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
                                sx={{ mt: 1 }}
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
                                // resend logic
                            }}
                            className="otp-btn-resend-btn"
                            sx={{ mt: 1, color: 'white', borderColor: '#6366f1' }}
                        >
                            Resend OTP
                        </Button>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default ForgPass;
