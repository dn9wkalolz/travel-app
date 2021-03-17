import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import getPhrase from '../../countrypage/languageSwitcher';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    borderRadius: 25,
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search({ handleSearchChange, lang }) {
  const classes = useStyles();

  const searchInputValue = useRef('');

  const handleOnChange = (e) => {
    searchInputValue.current = e.target.value;
  };

  const onSearchButtonClick = () => {
    handleSearchChange(searchInputValue.current);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchChange(searchInputValue.current);
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={getPhrase(lang, 'searchPlaceholder')}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleOnChange}
        type="search"
        onKeyPress={keyPress}
        autoFocus
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton onClick={onSearchButtonClick} color="primary" className={classes.iconButton} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

Search.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};
