import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    makeStyles,
    Typography
} from '@material-ui/core'



const useStyles = makeStyles((theme)=> ({
    root:{

        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    avatar:{
        height:100,
        width:100

    }
}));

const user = {
    avatar: require('../../images/User.png').default,
    ville: 'Ville 1',
    province: 'Province 1',
    domaine: 'Domaine',
    nom: 'Nom 1',
  };

const ProfilView = () => {

    const classes = useStyles();

    return (
        <Card
            className={classes.root}
        >
            <CardContent >
                <Box
                      alignItems="center"
                      display="flex"
                      flexDirection="column"
                >
                <Avatar
                    className={classes.avatar}
                    src={user.avatar}
                   />
                        <Typography
                         color="textPrimary"
                         gutterBottom
                         variant="h6"
                        >
                            {user.nom}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                        >
                            {`${user.ville}`}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                        >
                            {` ${user.province}`}
                        </Typography>

                </Box>
            </CardContent>
        </Card>
    )
}

export default ProfilView
