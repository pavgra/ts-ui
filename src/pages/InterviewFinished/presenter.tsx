import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '1rem',
    },
    descrContainer: {
        textAlign: 'center',
    },
}));

export default function InterviewFinished() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container direction="column">
                        <Grid item className={classes.descrContainer}>
                            You have successfully submitted your answers! We'll get back to you soon
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}