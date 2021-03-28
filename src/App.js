import logo from './logo.svg';
import './App.css';
import { Typography, Button } from '@material-ui/core';
import BoxContainer from './components/BoxContainer';
import BoxWrapper from './components/BoxWrapper'
import CustomizedTimeline from './components/Timeline';
import { Timeline } from '@material-ui/lab';

const App = () => {

  const color = "primary";

        {/* 
          const propsForButton = { 
              color: color,
              variant: 'contained',
              disableRipple: true,
              size: 'large'
            }
        */}
  return (
    <div className="App">
      <div className="App-firstheader">
        <Typography variant='h2'>Andreea-Maria Rosca</Typography>
      </div>
      <Typography variant="h4">Student</Typography>
      
      <Typography id='subtitle' variant= 'h3' align='left'>About</Typography>
      <BoxContainer>
        <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BoxWrapper>
        <BoxWrapper>
          <img src="static/images/portret.jpg" alt="eu" width="300"/>
        </BoxWrapper>
      </BoxContainer>
      
      <section>
        <Typography id='subtitle' variant= 'h3' align='left'>Education</Typography>
        <CustomizedTimeline />
      </section>
      <Typography id='subtitle' variant= 'h3' align='left'>Volunteer work</Typography>
      <Typography id='subtitle' variant= 'h3' align='left'>Hard&Soft Skills</Typography>
      <Button variant="contained" color={color} disableRipple ={true} size="large">
        Please click me
      </Button>
     
      
    </div>
  );
}

export default App;