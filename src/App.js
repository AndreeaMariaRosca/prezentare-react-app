import { Typography, Button } from '@material-ui/core';
import Carousel from './components/Carousel';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { faCalendarCheck, faYinYang, faPhoneSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

import Icon from './components/Icon';
import LanguageSkills from './components/skills/LanguageSkills';
import Title from './components/Title';
import SoftSkills from './components/skills/SoftSkills';
import HardSkills from './components/skills/HardSkills';
import User from "./components/User";
import JokeOfTheDay from './components/JokeOfTheDay';
import BoxContainer from './components/BoxContainer';
import BoxWrapper from './components/BoxWrapper'
import CustomizedTimeline from './components/Timeline';
import './App.css';

const App = () => {
  const useStyles = makeStyles({
    subtitle: {
        marginBottom: 20,
    },
  });
  const classes = useStyles();

  return (

    <div className="App">

      <Title/>
        <Typography id='subtitle' variant= 'h3' align='left'>
          Despre
        </Typography>

      <BoxContainer>
        <BoxWrapper>
          <Typography align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </BoxWrapper>
        <BoxWrapper>
          <img src="static/images/portret.jpg" alt="eu" width="300"/>
        </BoxWrapper>
      </BoxContainer>
      
      <Typography  id='subtitle' variant= 'h3' align='left'>Educatie</Typography>

      <CustomizedTimeline />

      <Typography  id='subtitle' variant= 'h3' align='left'>Voluntariat</Typography>
      
      <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper>

      <Carousel/>

      {/* <CustomizedProgressBars/> */}
      <Typography  id='subtitle' variant= 'h3' align='left'>Hard&Soft Skills</Typography>
      <SoftSkills />
      <HardSkills />


      <BoxWrapper >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper>

      <Typography gutterBottom={true} paragraph={true}  id='subtitle'  variant= 'h3' align='left'>Contact</Typography>
      
      {/* Componenta noua: contact */}
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
    
      <User/>
      <JokeOfTheDay/>
    </div>
  );
}

export default App;