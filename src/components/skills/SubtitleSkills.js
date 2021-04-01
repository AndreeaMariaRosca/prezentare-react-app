import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


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



export default function SubtitleSkills() {
    const classes = useStyles();
    return(
        <Grid container>
            
            <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h3">
                    Hard Skills
                </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} md={6}>
                <Typography variant="h3">
                    Soft Skills
                </Typography>
            </Grid>
        </Grid>

    );
} 