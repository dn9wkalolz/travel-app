import React from 'react';
import {
  Grid, Typography, Icon, Link,
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import logoRsSchool from '../../assets/images/rs_school-logo.svg';

const useStyles = makeStyles((theme) => ({
  companyInformation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footer: {
    padding: theme.spacing(6),
    backgroundColor: '#2f2f2f',
    color: theme.palette.common.white,
    marginTop: theme.spacing(10),
  },
  icon: {
    margin: theme.spacing(0.5),
  },
  logoRsSchool: {
    width: '100px',
    marginBottom: theme.spacing(3),
  },
  copyright: {
    marginTop: theme.spacing(4),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item lg={6} md={10} sm={12} xs={12}>
          <Link href="https://rs.school">
            <img
              className={classes.logoRsSchool}
              src={logoRsSchool}
              alt="logoRsSchool"
            />
          </Link>
        </Grid>

        <Grid
          className={classes.companyInformation}
          item
          lg={6}
          md={10}
          sm={12}
          xs={12}
        >
          <Typography>Building by:</Typography>
          <Grid item>
            <Icon className={classes.icon}>
              <Link href="https://github.com/nottombraider">
                <GitHub />
              </Link>
            </Icon>

            <Icon className={classes.icon}>
              <Link href="https://github.com/dn9wkalolz">
                <GitHub />
              </Link>
            </Icon>

            <Icon className={classes.icon}>
              <Link href="https://github.com/AndreiMilashevich">
                <GitHub />
              </Link>
            </Icon>

            <Icon className={classes.icon}>
              <Link href="https://github.com/AlDemi">
                <GitHub />
              </Link>
            </Icon>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.copyright}>
            {`© ${new Date().getFullYear()} oktravel`}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
