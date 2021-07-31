import React, {ChangeEvent} from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import QuestionDescription from '../QuestionDescription';
import { QuestionDescriptionProps } from '../QuestionDescription/types';

const useStyles = makeStyles((theme) => ({
    textareaContainer: {
        marginTop: '2rem',
    },
    textarea: {
        width: '100%',
    }
}));

interface QuestionTextProps extends QuestionDescriptionProps {
    value: string | null,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export default function QuestionText(props: QuestionTextProps) {
    const classes = useStyles();
    const {
        num,
        content,
        value,
        handleChange,
    } = props;
    return (
        <div>
            <QuestionDescription num={num} content={content} />
            <div className={classes.textareaContainer}>
                <TextField
                    className={classes.textarea}
                    label="Answer"
                    multiline
                    rows={4}
                    defaultValue={value}
                    variant="outlined"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}