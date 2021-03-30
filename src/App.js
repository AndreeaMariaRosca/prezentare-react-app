import './App.css';
import { Typography, Button } from '@material-ui/core';
import BoxContainer from './components/BoxContainer';
import BoxWrapper from './components/BoxWrapper'
import CustomizedTimeline from './components/Timeline';
import Carousel from './components/Carousel';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { faCalendarCheck, faYinYang, faPhoneSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon';
import CustomizedRatings from './components/HalfRating';
import HalfRating from './components/HalfRating';

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

      <Typography variant="h1"><p>Andreea-Maria Rosca</p></Typography>
      <Typography id='features' variant="h4">Student</Typography>
      
      <Typography id='subtitle' variant= 'h3' align='left'>
        About
      </Typography>

      <BoxContainer>
        <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BoxWrapper>
        <BoxWrapper>
          <img src="static/images/portret.jpg" alt="eu" width="300"/>
        </BoxWrapper>
      </BoxContainer>
      
      <Typography id='subtitle' variant= 'h3' align='left'>Education</Typography>

      <CustomizedTimeline />

      <Typography id='subtitle' variant= 'h3' align='left'>Volunteer work</Typography>
      
      <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper>

      <p><Carousel/></p>

      <HalfRating />

      <Typography id='subtitle' variant= 'h3' align='left'>Hard&Soft Skills</Typography>

      <BoxContainer>
        <BoxWrapper>
          <Icon icon={faCalendarCheck} size="4x">
            <p>Organizare</p>
          </Icon>
        </BoxWrapper>

        <BoxWrapper>
            <Icon icon={faYinYang} size="4x">
              <p>Rabdare</p>
            </Icon>
        </BoxWrapper>

        <BoxWrapper>
          <Icon icon={faPhoneSquare} size="4x">
            <p>Comunicare</p>
          </Icon>
        </BoxWrapper>

        <BoxWrapper>
          <Icon icon={faHandshake} size="4x">
            <p>Lucru in echipa</p>
          </Icon>
        </BoxWrapper>

      </BoxContainer>


      <BoxWrapper >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper>
      
      <Typography id='subtitle' variant= 'h3' align='left'>Contact</Typography>
      
     <BoxContainer>
       <BoxWrapper>
      <p align='center'>
      <MailIcon fontSize ='large'></MailIcon>
        : andreea.rosca204@gmail.com
      </p> 
      <p align='center'>
        <PhoneAndroidIcon fontSize ='large'></PhoneAndroidIcon>
        : 0722655793
      </p>
      <p align='center'>
        <GitHubIcon fontSize='large'></GitHubIcon>
        <a href="https://github.com/AndreeaMariaRosca">: https://github.com/AndreeaMariaRosca</a>
      </p>
      <p align='center'>
        <LinkedInIcon fontSize='large'></LinkedInIcon>
        <a href="https://www.linkedin.com/in/andreea-maria-ro%C8%99ca-38a0161b4/?locale=en_US">: https://www.linkedin.com/andreea-maria-rosca</a>
      </p>
      </BoxWrapper>
    </BoxContainer> 
    
    </div>
  );
}

export default App;