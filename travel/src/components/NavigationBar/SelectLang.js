import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import LanguageIcon from '@material-ui/icons/Language'

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    padding: '6px 0px',
    borderRadius: 5,
    marginLeft: theme.spacing(1),
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  languageIcon: {
    alignSelf: 'flex-start',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  select: {
    color: theme.palette.common.white,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SelectLang({ lang, handleLanguageChange }) {
  const classes = useStyles()

  return (
    <div className={classes.formContainer}>
      <FormControl variant='standard' className={classes.formControl}>
        <LanguageIcon className={classes.languageIcon} />
        <Select
          className={classes.select}
          value={lang}
          onChange={handleLanguageChange}>
          <MenuItem value={'en'}>en</MenuItem>
          <MenuItem value={'ru'}>ru</MenuItem>
          <MenuItem value={'pl'}>pl</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
