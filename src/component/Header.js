import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import WifiIcon from '@mui/icons-material/Wifi';
import PopupBox from './PopupBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const workSpace = [
  {
    id: 1,
    value: 'Workspace-1',
  },
  {
    id: 2,
    value: 'Workspace-2',
  },
  {
    id: 3,
    value: 'Workspace-3',
  },
  {
    id: 4,
    value: 'Workspace-4',
  },
  {
    id: 5,
    value: 'Workspace-5',
  },
  {
    id: 6,
    value: 'Workspace-6',
  },
  {
    id: 7,
    value: 'Workspace-7',
  },
  {
    id: 8,
    value: 'Workspace-8',
  },
  {
    id: 9,
    value: 'Workspace-9',
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        style={{
          background: '#fff',
          color: '#4D4F5C',
        }}
        position="fixed"
      >
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Swiper
            style={{
              width: '70%',
            }}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={8}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              639: {
                slidesPerView: 2,
              },
              865: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 6,
              },
              1700: {
                slidesPerView: 8,
              },
            }}
          >
            {workSpace &&
              workSpace.map((item, index) => (
                <SwiperSlide key={index}>
                  <Button
                    size="small"
                    sx={{
                      bgcolor: '#53575A',
                      border: '1px solid #53575A',
                      fontWeight: '200',
                      ':hover': {
                        bgcolor: '#53575A',
                        color: 'white',
                        border: '1px solid #FFBF3C',
                      },
                    }}
                    variant="contained"
                  >
                    {item.value}
                  </Button>
                </SwiperSlide>
              ))}
          </Swiper>
          <Box style={{ display: 'flex', gap: '5px' }}>
            <IconButton color="inherit" onClick={handleOpen}>
              <EditIcon />
            </IconButton>
            <IconButton color="inherit">
              <WifiIcon />
            </IconButton>
            <IconButton color="inherit">
              <ChatIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                borderLeft: '1px solid #EBEBF2',
                paddingLeft: '10px',
              }}
            >
              <Typography
                variant="body1"
                style={{ flexGrow: 1, fontSize: '14px' }}
              >
                John Doe
              </Typography>
              <IconButton color="inherit" onClick={handleProfileClick}>
                <Avatar />
              </IconButton>
            </Box>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              keepMounted
              open={Boolean(profileAnchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
              <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={handleToggleDrawer}
        onOpen={handleToggleDrawer}
      >
        <List>
          <ListItem onClick={() => setDrawerOpen(false)} button>
            <ArrowBackIcon />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 3" />
          </ListItem>
        </List>
      </SwipeableDrawer>

      <PopupBox open={open} onClose={handleClose} />
    </>
  );
};

export default Header;
