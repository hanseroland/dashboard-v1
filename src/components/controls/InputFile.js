import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Publish } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    }, 
  })); 

export default function InputFile(props) {

    const classes = useStyles();
    const { name,value,label, onChange } = props;
    return (
    <div>
        <input 
            accept="image/*" 
            className={classes.input} 
            id="icon-button-file" 
            type="file"
            name={name}
            value={value}
            onChange={onChange}
          
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <Publish />
            <Typography>{label}</Typography>
            
          </IconButton>
        </label>
        </div>
  
    )
}
