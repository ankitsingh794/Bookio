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
  Stack
} from '@mui/material';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
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
        >
          Settings <IoSettingsSharp style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
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
                    <MenuItem onClick={handleClose}>Change password <FaUserLock style={{ marginLeft: '8px' }} /></MenuItem>
                    <MenuItem onClick={handleClose}>Delete Account <MdDelete style={{ marginLeft: '29px' }} /></MenuItem>
                    <MenuItem onClick={handleClose}>Light/Dark Mode <CiLight style={{ marginLeft: '8px' }} /> <CiDark /></MenuItem>
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
