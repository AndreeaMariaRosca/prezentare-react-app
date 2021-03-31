import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function LanguageSkills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="left">C/C++</Typography>
      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

      <Typography variant="h4" align="left">Java</Typography>
      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />

      <Typography variant="h4" align="left">SQL</Typography>
      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />

    </div>
  );
}
