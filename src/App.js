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
      htmlFontSize: 20,
    },
  });
  return (

    <div className="App">
      <Title />
      <div className="body">
        <Typography id='subtitle' variant= 'h3' align='left' >
          Despre
        </Typography>

        <BoxContainer>
          <BoxWrapper>
            <Typography variant= 'h3' align='center' style={{height: 100, fontSize:"large" }}>
            Sunt o persoana deschisa si flexibila, pasionata de voluntariat. Reusesc sa-mi exprim ideile fluent, atat in limba romana, cat si in limba engleza, si reusesc sa ma adaptez rapid la conditiile de lucru. Imi place sa lucrez in echipa si sa cunosc persoane noi, cu ajutorul carora sa reusesc sa imi îmbunătățesc skill-urile si sa ma perfectionez.
            </Typography>
          </BoxWrapper>
          <BoxWrapper>
            <img src="static/images/portret.jpg" alt="eu" width="200" style={{margin:"0px 50px"}}/>
          </BoxWrapper>
        </BoxContainer>
        
        <ThemeProvider theme={theme}>
        <Typography  id='subtitle' variant= 'h3' align='left'>Educatie si experienta</Typography>
        </ThemeProvider>
        <CustomizedTimeline />

        <Typography  id='subtitle' variant= 'h3' align='left'>Voluntariat</Typography>

        <BoxContainer>
          <BoxWrapper>
          Pentru mine, activitatile de voluntariat implica acei tineri care observa neajunsurile societatii si nu raman pasivi in fata lor. Ma bucur ca, in prezent, reusesc sa vin in ajutorul studentilor prin marea familie SiSC, in cadrul careia ma aflu membru activ al Departamentului de Imagine&Promovare, unde m-am implicat pentru realizarea implementarilor grafice, a animatiilor si a editarilor video pentru proiectele Tap That Job, SiSC Tutoring - editia de iarna si Serile Teatrului Studentesc.        </BoxWrapper>
          <BoxWrapper>
            <img src="static/images/volunteering.jpg" alt="eu" width="350"/>
          </BoxWrapper>
        </BoxContainer>
        <br/>
        <Carousel/>

        <SubtitleSkills />
        <Divider variant="middle" />
        <HardSoftSkills/>

        <Typography gutterBottom={true} paragraph={true}  id='subtitle'  variant= 'h3' align='left' style={{height: 50 }}>Contact</Typography>
        
        <Contact style={{height: 500 }}/>
        <Divider variant="middle" />
        <JokeOfTheDay/>
        </div>
    </div>
  );
}

export default App;