import React, { useState } from 'react';
import {
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
  },
  {
    id: 2,
    title: 'Status',
    label: 'Idle',
  },
  {
    id: 1,
    title: 'Steps',
    label: 'NotRunning',
    className: 'blue',
  },
  {
    id: 4,
    title: 'Job No',
    label: '96',
  },
  {
    id: 5,
    title: 'Position',
    label: 'Completed',
  },
  {
    id: 6,
    title: 'Target',
    label: '0mm I 83230',
  },
  {
    id: 8,
    title: 'Position ID:',
    label: '01',
  },
  {
    id: 7,
    title: 'Speed',
    label: '0 rpm I 0 m/s',
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
        <span style={{ fontWeight: '500' }}>Carrier Props</span>
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
