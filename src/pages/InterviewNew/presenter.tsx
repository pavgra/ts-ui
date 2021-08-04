import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { apiPaths, paths } from 'const';
import api from 'services/Api';

const useStyles = makeStyles((theme) => ({
    candidateIdField: {
        width: '100%',
    },
}));

export default function InterviewNew() {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [candidateId, setCandidateId] = useState<string>('');
    const [createdInterviewId, setCreatedInterviewId] = useState<string | null>(null);
    const submit = useCallback(async () => {
        setIsLoading(true);
        const { interviewId } = await api.post<{ interviewId: string }>(apiPaths.interview(), { candidateId });
        setCreatedInterviewId(interviewId);
        setIsLoading(false);
    }, [candidateId]);

    return (
        <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
                Here you can create a new interview
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className={classes.candidateIdField}
                    label="Candidate ID"
                    onChange={(e) => setCandidateId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={submit}>
                    Create
                </Button>
            </Grid>
            {(isLoading || createdInterviewId !== null) && (
                <>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        {(isLoading) && (
                            <>
                                Creating...
                            </>
                        )}
                        {(createdInterviewId !== null) && (
                            <>
                                Created <Link to={paths.interviewPreview(createdInterviewId)} target="_blank">interview</Link>
                            </>
                        )}
                    </Grid>
                </>
            )}
        </Grid>
    )
}