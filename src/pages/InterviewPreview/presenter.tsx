import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '1rem',
    },
    descrContainer: {
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: '1rem !important',
        textAlign: 'center',
    }
}));

export default function InterviewPreview() {
    const classes = useStyles();
    const { id } = useParams<{id: string}>();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container direction="column">
                        <Grid item className={classes.descrContainer}>
                            You have 20 minutes to complete the test
                        </Grid>
                        <Grid item className={classes.buttonContainer}>
                            <Button variant="contained" color="primary" component={Link} to={`/interviews/${id}`}>
                                Start
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
