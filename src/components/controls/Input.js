import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name,type, label, value,error=null, onChange, disabled,multiline,rows } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            multiline={multiline}
            rows={rows}
            {...(error && {error:true,helperText:error})}
        />
    )
}
