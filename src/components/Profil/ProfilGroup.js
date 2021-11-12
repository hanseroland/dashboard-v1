import React,{useState,useEffect} from 'react'
import { 
    Container,
    Grid ,
    Avatar,
    Box, 
    Card, 
    CardContent,
    makeStyles, 
    } from '@material-ui/core'
import styled from 'styled-components'
import ProfilForm from '../Forms/ProfilForm'
import { toast } from "react-toastify";
import Controls from '../controls/Controls';
import { EditOutlined } from '@material-ui/icons'
import ProfilView from '../Forms/ProvilView';


const useStyles = makeStyles((theme)=> ({
    root:{
        
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
       
    },
    avatar:{
        height:100,
        width:100

    },
     detailPro:{
         justifyContent:'center',
         alignItems:'center'
     }
}));

const CompteContent = styled.div`
  
    padding: 10px;


` 

const ProfilGroup = () => {

    const classes = useStyles();
    const [profil, setProfil] = useState([]);
    const [currentID, setCurrentID] = useState("");
    var indice;
   

 
     const addOrEdit = async (obj,file) => {
        console.log(obj)
        if(currentID == ""){
            if(indice == 1){
                toast("Echec! Vous avez déjà ajouté un profil, vous pouvez le modifier", {
                    type: "info",
                });

            }else{

                if(file !== null){
                    
                            toast("Informations ajouté avec succès", {
                                type: "success",
                                })
                    
                  
                }else{

                    toast("Informations ajouté avec succès", {
                        type: "success",
                       });
                }

            }

        }else{

            if(file !== null){
               
                        toast("Mise à jour ajouté avec succès !", {
                            type: "success",
                            })
                        setCurrentID("")

            }else{ 
                toast("Mise à jour avec succès !!", {
                    type: "info",
                    });
                setCurrentID("");

            }

        }

     }

    

    return (
        <>
         <CompteContent>
            <Container maxWidth="lg" >
                    <Grid container  spacing={2}>
                            <Grid lg={4} md={6} xs={12}>
                                <ProfilView/>
                            </Grid>

                            <Grid item lg={8} md={6} xs={12} >
                                <ProfilForm  {...{addOrEdit,currentID,profil}} />
                            </Grid>
                    </Grid>
            </Container>
          </CompteContent>
        </>
    )
}

export default ProfilGroup
