/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 230,
    padding: '0px 4px',
    borderRadius: 5,
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1.5),
  },
  searchInput: {
    margin: theme.spacing(0.8),
    color: theme.palette.common.white,
  },
}));

export default function Search({ onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        onChange={onChange}
        className={classes.searchInput}
        inputProps={{ 'aria-label': 'description' }}
        placeholder="Search"
        // color='inhe'
      />
    </div>
  );
}
