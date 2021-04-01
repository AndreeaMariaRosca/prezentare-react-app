import { Typography, Button } from '@material-ui/core';
import Carousel from './components/Carousel';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { faCalendarCheck, faYinYang, faPhoneSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";


import Icon from './components/Icon';
import LanguageSkills from './components/skills/LanguageSkills';
import Title from './components/Title';
import SubtitleSkills from './components/skills/SubtitleSkills';
import HardSoftSkills from './components/skills/HardSoftSkills';
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

  const theme = createMuiTheme({
    typography: {
      // Tell Material-UI what the font-size on the html element is.
      htmlFontSize: 20,
    },
  });
  return (

    <div className="App">

      <Title/>
        <Typography id='subtitle' variant= 'h3' align='left'>
          Despre
        </Typography>

      <BoxContainer>
        <BoxWrapper>
        {/* <ThemeProvider theme={theme}> */}
           {/* <Typography align='center'>  */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           {/* </Typography> */}
          {/* </ThemeProvider> */}
        </BoxWrapper>
        <BoxWrapper>
          <img src="static/images/portret.jpg" alt="eu" width="250" style={{margin:"0px 50px"}}/>
        </BoxWrapper>
      </BoxContainer>
      
      {/* <Typography  id='subtitle' variant= 'h3' align='left'>Educatie si experienta</Typography> */}
      <ThemeProvider theme={theme}>
      <Typography  id='subtitle' variant= 'h3' align='left'>Educatie si experienta</Typography>
      </ThemeProvider>
      <CustomizedTimeline />

      <Typography  id='subtitle' variant= 'h3' align='left'>Voluntariat</Typography>
      
      {/* <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper> */}

      <BoxContainer>
        <BoxWrapper>
          {/* <Typography align='center'> */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          {/* </Typography> */}
        </BoxWrapper>
        <BoxWrapper>
          <img src="static/images/volunteering.jpg" alt="eu" width="450"/>
        </BoxWrapper>
      </BoxContainer>
      <Carousel/>

      <Typography  id='subtitle' variant= 'h3' align='left'>Hard&Soft Skills</Typography>
      <BoxWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </BoxWrapper>

      <SubtitleSkills />
      <Divider variant="middle" />
      <HardSoftSkills/>

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
      <Divider variant="middle" />

      <JokeOfTheDay/>
    </div>
  );
}

export default App;