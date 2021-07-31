import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import { OptionSetProps } from './types';

const useStyles = makeStyles((theme) => ({
}));

export default function OptionSet({ name, options, value, handleChange }: OptionSetProps) {
    const classes = useStyles();

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Answer</FormLabel>
            <RadioGroup name={name} value={value} onChange={handleChange}>
                {options.map(opt => (
                    <FormControlLabel key={opt.value} value={opt.value} control={<Radio />} label={opt.label} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}