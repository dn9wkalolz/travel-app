import PropTypes from 'prop-types';
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
  toggleMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
}));

function NavigationBar({
  handleSearchChange, lang, handleLanguageChange, location,
}) {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false,
  });

  const isAuthToken = Boolean(sessionStorage.getItem('authToken'));

  const [isAuth, setIsAuth] = useState(isAuthToken);

  const isSearchVisible = location.pathname === '/countries';

  const { toggleMenu, toggleMenuOpen } = state;

  const removeToken = () => {
    sessionStorage.clear();
    setIsAuth(false);
  };

  useEffect(() => {
    if (isAuthToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuthToken]);

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 960
      ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
      : setState((prevState) => ({ ...prevState, toggleMenu: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const classes = useStyles();

  const getToggleMenuOptions = () => (
    <Box className={classes.toggleMenu}>
      {isSearchVisible && <Search handleSearchChange={handleSearchChange} lang={lang} />}

      {
          !isAuth && (
            <Button
              variant="contained"
              onClick={removeToken}
              color="primary"
            >
              <NavLink className={classes.link} to="/login">
                Login
              </NavLink>
            </Button>
          )
        }
      {
          isAuth && (
            <Button
              variant="contained"
              onClick={removeToken}
              color="primary"
            >
              Logout
            </Button>
          )
        }
    </Box>
  );

  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () => setState((prevState) => (
      { ...prevState, toggleMenuOpen: true }));

    const handleToggleMenuClose = () => setState((prevState) => (
      { ...prevState, toggleMenuOpen: false }));

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

  const displayLargeMenu = () => (
    <Toolbar className={classes.toolbarLarge}>
      <Typography component="h1" variant="h6" className={classes.siteTitle}>
        <NavLink className={classes.link} to="/countries">
          oktravel
        </NavLink>
      </Typography>

      <Box className={classes.menuBox}>
        {isSearchVisible && <Search handleSearchChange={handleSearchChange} lang={lang} />}
        <SelectLang lang={lang} handleLanguageChange={handleLanguageChange} />

        {
          !isAuth && (
            <MenuItem>
              <Button
                className={classes.menuOption}
                variant="outlined"
                color="inherit"
                size="medium"
                onClick={removeToken}
              >
                <NavLink className={classes.link} to="/login">
                  Login
                </NavLink>
              </Button>
            </MenuItem>
          )
        }
        {
          isAuth && (
            <MenuItem>
              <Button
                className={classes.menuOption}
                variant="outlined"
                color="inherit"
                size="medium"
                onClick={removeToken}
              >
                Logout
              </Button>
            </MenuItem>
          )
        }
      </Box>
    </Toolbar>
  );

  return (
    <Container>
      <AppBar>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</AppBar>
    </Container>
  );
}

NavigationBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NavigationBar);
