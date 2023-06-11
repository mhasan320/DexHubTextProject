import React, { useState } from 'react';
import {
  Typography,
  Card,
  IconButton,
  Tooltip,
  Grid,
  List,
  ListItem,
  CardContent,
  Collapse,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import CollapseIcon from './CollapseIcon';
import { Box } from '@mui/system';

const liftConvoer = [
  {
    id: 1,
    title: 'Mode',
    label: 'Auto',
    className: 'green',
  },
  {
    id: 2,
    title: 'Status',
    label: 'Warning',
    className: 'warning',
  },
  {
    id: 1,
    title: 'Task Type',
    label: 'Idle',
    className: 'blue',
  },
  {
    id: 4,
    title: 'Alarms:',
    label: '109',
  },
];

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
        <span style={{ fontWeight: '500' }}>Fill Rate of Systems</span>
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
        <CardContent>
          <Typography
            sx={{
              fontSize: '14px',
              marginBottom: '10px',
              fontWeight: '500',
            }}
          >
            Lift Conveyor 1
          </Typography>
          <Grid container spacing={2}>
            <List className="conveorList">
              {liftConvoer &&
                liftConvoer.map((item, index) => (
                  <ListItem key={index}>
                    <span>{item.title} :</span>
                    <span className={item.className}>{item.label}</span>
                  </ListItem>
                ))}
            </List>
          </Grid>
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
