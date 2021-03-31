import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019-prezent
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon fontSize='large'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Academia de Studii Economice, Bucuresti           
            </Typography>
            <Typography>Informatica Economica</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
         <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
             2016-2019
            </Typography>
         </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon fontSize='large'/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Colegiul National "Nicolae Grigorescu", Campina            
            </Typography>
            <Typography>Matematica Informatica, intensiv Informatica</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}