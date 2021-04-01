import { Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    myTitle: {
        width: "100%",
        backgroundImage: `url("https://www.mwallpapers.com/photos/wallpapers/3d-abstract/4k-abstracthd-wallpapers-desktop-background-android-iphone-1080p-4k-lpitg.jpg?v=1576595951")` ,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "110vh",
        padding: 0
    }
});

export default function Title() {
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.myTitle} elevation={0}>
           
                <div>
                    <Typography variant="h2">Andreea-Maria Rosca</Typography>
                    <Typography variant="h5">Studenta</Typography>
                </div>
            </Paper>
        </div>
    );
  }