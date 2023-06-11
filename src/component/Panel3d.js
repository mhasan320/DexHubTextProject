import React from 'react';
import { Card, IconButton, Tooltip, CardContent } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

export default function ConvoerCardComponent() {
  return (
    <Card>
      <Box
        sx={{
          background: '#53575A',
          display: 'flex',
          color: 'white',
          padding: '0px 5px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: '500' }}>Panel 3D</span>
        <Box>
          <Tooltip title="Info">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings">
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <CardContent
        sx={{
          height: '400px',
          background: '#2D2C3F',
        }}
      ></CardContent>
    </Card>
  );
}
