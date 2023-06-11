import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    title: 'Alarms',
    label: '109',
  },
  {
    id: 5,
    title: 'Why Not Working',
    label: '',
  },
  {
    id: 6,
    title: 'Warning List:',
    label: '',
  },
  {
    id: 7,
    title: 'Warning List',
    label: '',
  },
  {
    id: 8,
    title: 'Pallet Sensors	',
    label: '109',
  },
  {
    id: 9,
    title: 'Car Weight',
    label: '',
  },
  {
    id: 10,
    title: 'Active Shelf',
    label: '0',
  },
  {
    id: 11,
    title: 'PLC Pallet Exists	',
    label: '',
  },
  {
    id: 12,
    title: 'Front Lock Status	',
    label: '',
  },
  {
    id: 13,
    title: 'Rear Lock Status',
    label: '',
  },
  {
    id: 14,
    title: 'Actual Velocity',
    label: '',
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
        <span style={{ fontWeight: '500' }}>Convoeyor id - 01</span>
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
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="card-content"
              id="card-header"
            >
              <Typography variant="h6">Conveyor Commands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Room 01 : Oda 1</Typography>
              <Typography>Pallet [0] : 260 - No Car</Typography>
              <Typography>Carrier 2 (Turntable) : Turntable 1</Typography>
              <Typography>Carrier 1 (Lift) : Lift 1</Typography>
              <Typography>Facility</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="card-content"
              id="card-header"
            >
              <Typography variant="h6">Conveyor Config</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Room 01 : Oda 1</Typography>
              <Typography>Pallet [0] : 260 - No Car</Typography>
              <Typography>Carrier 2 (Turntable) : Turntable 1</Typography>
              <Typography>Carrier 1 (Lift) : Lift 1</Typography>
              <Typography>Facility</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="card-content"
              id="card-header"
            >
              <Typography variant="h6">Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Room 01 : Oda 1</Typography>
              <Typography>Pallet [0] : 260 - No Car</Typography>
              <Typography>Carrier 2 (Turntable) : Turntable 1</Typography>
              <Typography>Carrier 1 (Lift) : Lift 1</Typography>
              <Typography>Facility</Typography>
            </AccordionDetails>
          </Accordion>
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
