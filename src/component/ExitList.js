import React, { useState } from 'react';
import {
  Typography,
  Card,
  IconButton,
  Tooltip,
  CardContent,
  Collapse,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import CollapseIcon from './CollapseIcon';
import { Box } from '@mui/system';

export default function ConvoerCardComponent() {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <span style={{ fontWeight: '500' }}>Exit List</span>
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
      <Collapse
        className="cardCollapse"
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <Typography>No data to display</Typography>
        </CardContent>
      </Collapse>
      <div className="exandableClick">
        <IconButton onClick={handleExpandClick}>
          {expanded ? <CollapseIcon /> : <CollapseIcon />}
        </IconButton>
      </div>
    </Card>
  );
}
