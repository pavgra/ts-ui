import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import CircularProgress from '@material-ui/core/CircularProgress';

import QuestionSingleChoice from 'components/QuestionSingleChoice';

import { QuestionData } from 'types/QuestionData';
import { Status } from 'types/Interview';
import data from './data.json';
import { useHistory, useParams } from 'react-router-dom';
import QuestionText from '../../components/QuestionText';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '1rem',
    },
    question: {
        padding: '1rem 0',
    },
    midDivider: {
        paddingTop: '1.5rem',
        marginBottom: '1.5rem !important',
        '&:first-child': {
            paddingTop: '0.75rem',
        },
    },
    loaderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
    },
    submitSection: {
        marginTop: '1rem',
        textAlign: 'center',
    },
}));

export default function Interview() {
    const classes = useStyles();

    const { id } = useParams<{id: string}>();
    const { push } = useHistory();

    const [status, setStatus] = useState<string>('');
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [answers, setAnswers] = useState<{[key: string]: string | null}>({});
    const submit = useCallback(() => {
        console.log(id, answers);
        setStatus(Status.FINISHED)
    }, [answers]);

    useEffect(() => {
        setTimeout(() => {
            const answers: { [key: string]: string | null } = {};
            data.questions.forEach(q => {
                answers[q.id] = null;
            });

            setAnswers(answers);
            setQuestions(data.questions as any);
        }, 2000);
    }, []);

    useEffect(() => {
        if (status === Status.FINISHED) {
            push('/interviews/finished');
        }
    }, [status]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container direction="column">
                        <Grid>
                            <Typography align="center" variant="h5">
                                Questions
                            </Typography>
                        </Grid>
                        {(questions && questions.length) ? (
                            <Grid className={classes.question}>
                                {questions.map((q, idx) => (
                                    <>
                                        <Divider key={`d-${q.id}`} className={classes.midDivider} />
                                        {(q.type === 'SINGLE_CHOICE') && (
                                            <QuestionSingleChoice
                                                key={`q-${q.id}`}
                                                num={idx + 1}
                                                content={q.text}
                                                name={q.id}
                                                options={q.options}
                                                value={answers[q.id]}
                                                handleChange={(e, v) => {
                                                    setAnswers({
                                                        ...answers,
                                                        [q.id]: v,
                                                    })
                                                }}
                                            />
                                        )}
                                        {(q.type === 'TEXT') && (
                                            <QuestionText
                                                key={`q-${q.id}`}
                                                num={idx + 1}
                                                content={q.text}
                                                value={answers[q.id]}
                                                handleChange={(e) => {
                                                    setAnswers({
                                                        ...answers,
                                                        [q.id]: e.target.value,
                                                    })
                                                }}
                                            />
                                        )}
                                    </>
                                ))}
                            </Grid>
                        ) : (
                            <div>
                                <Divider className={classes.midDivider} />
                                <div className={classes.loaderContainer}>
                                    <CircularProgress />
                                </div>
                            </div>
                        )}
                        <Divider className={classes.midDivider} />
                        <Grid className={classes.submitSection}>
                            <Button variant="contained" color="primary" onClick={submit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
