import logo from './logo.svg';
import './App.css';
import { Typography, Button } from '@material-ui/core';
import Box from './components/Box';

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
      <div className="App-firsth">
        <Typography variant='h2'>Andreea-Maria Rosca</Typography>
      </div>
      <Typography variant='h3'>Student</Typography>
      <Button variant="contained" color={color} disableRipple ={true} size="large">
        Please click me
      </Button>
      <Box name ="Andreea">
        <h1> Click me again </h1>
      </Box>

    
    </div>
  );
}

export default App;