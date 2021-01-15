import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import '../subheader/subheader.css';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


function Subheader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="root">
      <div className="header-logo"><h2 className="event-name">Event Name</h2></div>
      <div className="header-menu">

        <Tabs

          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <div>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="#fff"
              onClick={handleClick}
            >
              Asia / Calcutta
      </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>

                <ListItemText primary="Asia / Kolalampir" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="Asia / Pakistan" />
              </StyledMenuItem>

            </StyledMenu>
          </div>

        </Tabs>
      </div>
    </Box>
  )
}

export default Subheader;