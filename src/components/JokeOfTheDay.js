import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const JokeOfTheDay = () => {

    const[joke, setJoke] = useState({
        setup: "What's the difference between a hippo and a zippo?",
        punchline: "One is really heavy, the other is a little lighter."
    });
    
    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(result => result.json())
            .then(joke => setJoke(joke));
    });

    return (
        <div>
            <div>{joke.setup}</div>
            <div>{joke.punchline}</div>
        </div>
    )
}


export default JokeOfTheDay;
