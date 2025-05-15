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
                <Typography variant="h4" gutterBottom>Fogot Password ?</Typography>

                <TextField label="Email or Phone no" fullWidth margin="normal" />

                <Button fullWidth variant="contained" className="login-btn">
                    Sent OTP
                </Button>

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

            </Paper>
        </Box>
    );
};

export default ForgPass;
