import { Typography, Button } from '@material-ui/core';
import Carousel from './components/Carousel';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";


import Title from './components/Title';
import SubtitleSkills from './components/skills/SubtitleSkills';
import HardSoftSkills from './components/skills/HardSoftSkills';
import JokeOfTheDay from './components/JokeOfTheDay';
import BoxContainer from './components/BoxContainer';
import BoxWrapper from './components/BoxWrapper'
import CustomizedTimeline from './components/Timeline';
import Contact from './components/Contact';
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

      <Title />
        <Typography id='subtitle' variant= 'h3' align='left' >
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

      <SubtitleSkills />
      <Divider variant="middle" />
      <HardSoftSkills/>

      <Typography gutterBottom={true} paragraph={true}  id='subtitle'  variant= 'h3' align='left' style={{height: 50 }}>Contact</Typography>
      
      <Contact style={{height: 500 }}/>
      <Divider variant="middle" />
      <JokeOfTheDay/>
    </div>
  );
}

export default App;