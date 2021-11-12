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
import { People } from '@material-ui/icons';
import CountUp from 'react-countup';
import { FaNewspaper } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    user:{
        backgroundColor:'blue'
    }
  }));
  
  const CardPoste = (props) => {
  
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
              Postes
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
              <FaNewspaper />
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
  
  export default CardPoste;
  