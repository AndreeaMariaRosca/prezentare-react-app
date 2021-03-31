import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { faCalendarCheck, faYinYang, faPhoneSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';

import Icon from '../Icon.js';
import Card from'../Card';
import BoxContainer from '../BoxContainer';
import BoxWrapper from '../BoxWrapper'

const useStyles = makeStyles({
    mySkills:{
        width: "max-width",
        display: "flex",
        direction: "column",
        justifyContent: "center",
        height: "110vh",
    },
}
);



export default function SoftSkills() {
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <BoxContainer>
                    <BoxWrapper>
                        <Icon icon={faCalendarCheck} size="2x">
                            <p>Organizare</p>
                        </Icon>
                        <Icon icon={faYinYang} size="2x">
                            <p>Rabdare</p>
                        </Icon>
                    </BoxWrapper>
                    <BoxWrapper>
                        <Icon icon={faYinYang} size="2x">
                            <p>ceva</p>
                        </Icon>
                        <Icon icon={faYinYang} size="2x">
                            <p>altceva</p>
                        </Icon>
                    </BoxWrapper>
                </BoxContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography variant="h3">
                    Soft Skills
                </Typography>
            </Grid>
        </Grid>
//        // {/* //<div> */}
//                 {/* <Paper className={classes.myTitle} elevation={0}>
//             <Grid container style={{gap:0}} spacing={0} direction="row">
//                 <div>
//                 <Grid container item xs={6} direction="column">
//                     <Paper>
                        
//                     <Icon icon={faCalendarCheck} size="lg">
//                             <p style={{color:"#58355E"}}>Organizare</p>
//                     </Icon>
                    
                    
//                     <Icon icon={faCalendarCheck} size="lg">
//                             <p style={{color:"#58355E"}}>Organizare</p>
//                     </Icon>
                    
//                     </Paper>
//                     <Paper>
//                         <Icon icon={faCalendarCheck} size="lg">
//                             <p style={{color:"#58355E"}}>Organizare</p>
//                         </Icon>
//                         <Icon icon={faCalendarCheck} size="lg">
//                             <p style={{color:"#58355E"}}>Organizare</p>
//                         </Icon>
//                     </Paper>
//                 </Grid> */}

//               {/* //  </div> */}
                

                
//           {/* //  </Grid> */}

            
                
            
       
//       {/* //  </Paper> */}
       
//    {/* // </div> */}
    );
}