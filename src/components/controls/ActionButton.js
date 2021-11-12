import React from 'react'
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
       
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
    primary: {
       
        '& .MuiButton-label': {
            color: '#1a1359',
        }
    },
    primaryLight: {
       
        '& .MuiButton-label': {
            color: '#3e29ff',
        }
    },
}))

export default function ActionButton(props) {

    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
