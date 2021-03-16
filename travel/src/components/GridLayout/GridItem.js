import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  card: {
    '&:hover': {
      background: '#f1f1f1',
    },
  },
  cardImage: {
    height: 300,
  },
}));

export default function GridItem({
  title,
  image,
  description,
  id,
  subheader,
  alt,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={subheader} />

      <Link to={`/countries/${id}`}>
        {image && (
          <CardMedia className={classes.cardImage} image={image} title={alt} />
        )}
      </Link>

      <CardContent>
        <Typography noWrap>{description}</Typography>
      </CardContent>

      <CardActions>
        <Link to={`/countries/${id}`}>
          <IconButton aria-label="Visit page">
            <ArrowForward />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  subheader: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
