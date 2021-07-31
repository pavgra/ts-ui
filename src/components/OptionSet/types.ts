import { ChangeEvent } from 'react';

export interface OptionSetProps {
    name: string,
    options: {
        label: string,
        value: string
    }[],
    value: string | null,
    handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void,
}