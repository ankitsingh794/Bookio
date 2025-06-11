import React, { useState, useRef } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  // Responsive font size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // Responsive styles
  const menuItemStyle = {
    fontSize: isMobile ? '0.95rem' : '1.1rem',
    padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.5rem' : '1rem',
  };

  const buttonStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
    minWidth: isMobile ? '120px' : '160px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          style={buttonStyle}
        >
          Settings <IoSettingsSharp style={{ marginLeft: isMobile ? '6px' : '8px', verticalAlign: 'middle', fontSize: isMobile ? '1.1em' : '1.3em' }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{ zIndex: 1300, minWidth: isMobile ? '180px' : '220px' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem onClick={handleClose} style={menuItemStyle}>
                      Change password
                      <FaUserLock style={{ marginLeft: isMobile ? '6px' : '8px', fontSize: isMobile ? '1em' : '1.2em' }} />
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={menuItemStyle}>
                      Delete Account
                      <MdDelete style={{ marginLeft: isMobile ? '16px' : '29px', fontSize: isMobile ? '1em' : '1.2em' }} />
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={menuItemStyle}>
                      Light/Dark Mode
                      <CiLight style={{ marginLeft: isMobile ? '6px' : '8px', fontSize: isMobile ? '1em' : '1.2em' }} />
                      <CiDark style={{ fontSize: isMobile ? '1em' : '1.2em' }} />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default DropdownMenu;
