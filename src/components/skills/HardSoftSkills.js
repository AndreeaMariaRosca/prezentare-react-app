import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { faCalendarCheck, faYinYang, faPhoneSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Rating from '@material-ui/lab/Rating';
import Divider from "@material-ui/core/Divider";


import Icon from '../Icon.js';
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
});

export default function HardSoftSkills() {
    const classes = useStyles();
    return(
        <div>
             <Grid container>
            <Grid item xs={12} sm={6} md={5}>
                    <BoxContainer>
                        <BoxWrapper>
                            <p>C/C++</p>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            {/* <BoxWrapper> */}
                            <p>Javascript</p>
                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                        {/* </BoxWrapper> */}
                        </BoxWrapper>
                     

                        <BoxWrapper>

                            {/* <Typography variant="h4" align="left">Java</Typography> */}
                            <p>Java</p>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            <p>SQL</p>
                            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        </BoxWrapper>
                    
                    </BoxContainer>
                    {/* <Divider orientation="vertical" flexItem /> */}
                </Grid>
            <Divider variant="middle"/>

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
                        <Icon icon={faHandshake} size="2x">
                            <p>Lucru in echipa</p>
                        </Icon>
                        <Icon icon={faPhoneSquare} size="2x">
                            <p>Comunicare</p>
                        </Icon>
                    </BoxWrapper>
                </BoxContainer>
            </Grid>

        </Grid>
        <div style={{height: 100 }}/>
        </div>
    );
} 