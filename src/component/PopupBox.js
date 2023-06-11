import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const PopupBox = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          background: '#53575A',
          color: '#fff',
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: '300',
        }}
      >
        Create new Tab/Workspace
      </DialogTitle>
      <DialogContent>
        <TextField fullWidth placeholder="Write tab name here" />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} color="success" fullWidth>
          Submit
        </Button>
        <Button onClick={onClose} variant="contained" fullWidth color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupBox;
