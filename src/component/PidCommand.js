import React, { useState } from 'react';
import {
  Card,
  IconButton,
  Tooltip,
  Grid,
  TextField,
  CardContent,
  Button,
  ButtonGroup,
  Collapse,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CollapseIcon from './CollapseIcon';
import { Box } from '@mui/system';

export default function ConvoerCardComponent() {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
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
        <span style={{ fontWeight: '500' }}>P. Id: 11 Commands</span>
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
            <div className="textBoxCl">
              <SearchIcon className="searchIcon" />
              <TextField
                sx={{
                  margin: '10px 0px 10px 10px',
                  width: '116%',
                }}
                size="small"
                label="Any Room"
                variant="outlined"
                onChange={handleChange}
              />
            </div>
            <ButtonGroup className="BtnGroup">
              <Button size="small" variant="contained" color="primary">
                Bring Car
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{
                  background: '#53575A',
                  ':hover': {
                    background: '#53575A',
                  },
                }}
              >
                Exit Car
              </Button>
              <Button size="small" variant="contained" color="error">
                Delete Car
              </Button>
              <Button size="small" variant="contained" color="error">
                Cancel Retrivial
              </Button>
            </ButtonGroup>
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
