import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, Button, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { format } from 'date-fns';

const UserDetailModal = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        User Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}><strong>User ID:</strong></Grid>
          <Grid item xs={6}>{user.id}</Grid>

          <Grid item xs={6}><strong>Full Name:</strong></Grid>
          <Grid item xs={6}>{user.fullName}</Grid>

          <Grid item xs={6}><strong>Email:</strong></Grid>
          <Grid item xs={6}>{user.email}</Grid>

          <Grid item xs={6}><strong>Role:</strong></Grid>
          <Grid item xs={6}>{user.role}</Grid>

          <Grid item xs={6}><strong>Status:</strong></Grid>
          <Grid item xs={6}>{user.status}</Grid>

          <Grid item xs={6}><strong>Registration Date:</strong></Grid>
          <Grid item xs={6}>{format(new Date(user.regDate), 'yyyy-MM-dd')}</Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailModal;
