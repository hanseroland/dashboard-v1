import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    makeStyles
  } from '@material-ui/core';
 import { red } from '@material-ui/core/colors';
import { Message } from '@material-ui/icons';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    user:{
        backgroundColor:'orange'
    }
  }));
  
  const CardMessages = (props) => {
  
    const  classes = useStyles();

    return(
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Messages
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              <CountUp duration={3} end={props.taille} />
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
            className={classes.user}
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <Message />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >  
        </Box>
      </CardContent>
    </Card>
    );
 }
  
  export default CardMessages;
  