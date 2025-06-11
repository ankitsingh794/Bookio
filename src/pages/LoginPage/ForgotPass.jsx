import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";
import './Style/ForgotPass.css';

const ForgPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendResetEmail = async () => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await axios.post("/api/users/forgot-password", {
        email: email.trim(),
      });

      if (response.data.message) {
        setSuccessMsg(response.data.message);
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message ||
          "Error occurred while sending reset email. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <Box className="forgot-container space-bg">
      <Paper elevation={6} className="forgot-box glass-effect">
        <Typography variant="h4" gutterBottom className="forgot-title">
          Forgot Password?
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        <Button
          fullWidth
          variant="contained"
          className="forgot-btn"
          disabled={loading || !email.trim()}
          onClick={sendResetEmail}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>

        {errorMsg && (
          <Typography color="error" sx={{ mt: 1 }}>
            {errorMsg}
          </Typography>
        )}

        {successMsg && (
          <Typography color="success.main" sx={{ mt: 1 }}>
            {successMsg}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ForgPass;
