/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Container,
  Toolbar,
  Typography,
  Box,
  AppBar,
  IconButton,
  MenuItem,
  Drawer,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';
import SelectLang from './SelectLang';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: '#e0e0e0',
      opacity: '.7',
    },
  },
  siteTitle: {
    fontWeight: 400,
    letterSpacing: 1,
    marginLeft: theme.spacing(1),
  },
  toolbarLarge: {
    background: '#2f2f2f',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  toolbarSmall: {
    display: 'flex',
    background: '#2f2f2f',
    justifyContent: 'space-between',
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  menuOption: {
    color: theme.palette.common.white,
    letterSpacing: 1,
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: '#e0e0e0',
      opacity: '.7',
    },
  },
  menuIcon: {
    color: theme.palette.common.white,
  },
}));

function NavigationBar({
  handleSearchChange, lang, handleLanguageChange, location,
}) {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false,
  });

  const isNavBarVisible = location.pathname === '/countries';

  const { toggleMenu, toggleMenuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 960
      ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
      : setState((prevState) => ({ ...prevState, toggleMenu: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const classes = useStyles();

  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () => setState((prevState) => ({ ...prevState, toggleMenuOpen: true }));

    const handleToggleMenuClose = () => setState((prevState) => ({ ...prevState, toggleMenuOpen: false }));

    return (
      <Toolbar className={classes.toolbarSmall}>
        <IconButton
          {...{
            onClick: handleToggleMenuOpen,
          }}
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography component="h1" variant="h5" className={classes.siteTitle}>
          <NavLink className={classes.link} to="/countries">
            oktravel
          </NavLink>
        </Typography>
        <SelectLang lang={lang} handleLanguageChange={handleLanguageChange} />

        <Drawer
          {...{
            anchor: 'left',
            open: toggleMenuOpen,
            onClose: handleToggleMenuClose,
          }}
        >
          <div>{getToggleMenuOptions()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getToggleMenuOptions = () => (
    <Box>
      {isNavBarVisible && <Search handleSearchChange={handleSearchChange} />}

      <MenuItem>
        <Button className={classes.menuOption} size="medium">
          Sign in
        </Button>
      </MenuItem>

      <MenuItem>
        <Button
          className={classes.menuOption}
          variant="outlined"
          color="inherit"
          size="medium"
        >
          Sign up
        </Button>
      </MenuItem>
    </Box>
  );

  const displayLargeMenu = () => (
    <Toolbar className={classes.toolbarLarge}>
      <Typography component="h1" variant="h6" className={classes.siteTitle}>
        <NavLink className={classes.link} to="/countries">
          oktravel
        </NavLink>
      </Typography>

      <Box className={classes.menuBox}>
        {isNavBarVisible && <Search handleSearchChange={handleSearchChange} />}
        <SelectLang lang={lang} handleLanguageChange={handleLanguageChange} />

        <MenuItem>
          <Button className={classes.menuOption} size="medium" href="/login">
            <NavLink className={classes.link} to="/login">
              Sign in
            </NavLink>
          </Button>
        </MenuItem>

        <MenuItem>
          <Button
            className={classes.menuOption}
            variant="outlined"
            color="inherit"
            size="medium"
          >
            Sign up
          </Button>
        </MenuItem>
      </Box>
    </Toolbar>
  );

  return (
    <Container>
      <AppBar>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</AppBar>
    </Container>
  );
}

export default withRouter(NavigationBar);
