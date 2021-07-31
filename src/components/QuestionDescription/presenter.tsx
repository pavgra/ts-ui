import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { QuestionDescriptionProps } from './types';

const useStyles = makeStyles((theme) => ({
    num: {
        fontWeight: 600,
        paddingRight: '0.5rem',
    }
}));

export default function QuestionDescription({ num, content }: QuestionDescriptionProps) {
    const classes = useStyles();

    return (
        <div>
            <span className={classes.num}>{num}.</span>
            <span>{content}</span>
        </div>
    )
}