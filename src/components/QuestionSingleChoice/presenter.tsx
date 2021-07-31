import React from 'react';
import { makeStyles } from '@material-ui/styles';
import QuestionDescription from '../QuestionDescription';
import { QuestionDescriptionProps } from '../QuestionDescription/types';
import OptionSet from '../OptionSet';
import { OptionSetProps } from '../OptionSet/types';

const useStyles = makeStyles((theme) => ({
    optionSet: {
        marginTop: '1rem',
    }
}));

interface QuestionSingleChoiceProps extends QuestionDescriptionProps, OptionSetProps {}

export default function QuestionSingleChoice(props: QuestionSingleChoiceProps) {
    const classes = useStyles();
    const {
        num,
        content,
        //
        name,
        options,
        value,
        handleChange,
    } = props;

    return (
        <div>
            <QuestionDescription num={num} content={content} />
            <div className={classes.optionSet}>
                <OptionSet
                    name={name}
                    options={options}
                    value={value}
                    handleChange={handleChange}
                />
            </div>
        </div>
    )
}