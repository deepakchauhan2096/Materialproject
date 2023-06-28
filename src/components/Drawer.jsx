import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
  
    const [open, setOpen] =useState(false);

    const handleClose = () =>{
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


  const Lists = () => {
    return (<Box role="presentation">
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{width:250}} xl={false} >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>)
    }

  return (
    <div>
        <React.Fragment>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            open={open}
            onClose={handleClose}
            anchor={"left"}
          >
            <Lists />
          </Drawer>
        </React.Fragment>
    </div>
  );
}