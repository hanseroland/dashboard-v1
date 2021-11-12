import React, {useState} from 'react';
import { Box,makeStyles, Grid, InputAdornment, Paper,TableCell,TableRow, Toolbar, TableBody } from '@material-ui/core';
import Controls from '../controls/Controls';
import {  Message, Policy, Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import useTable from '../useTable';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Popup from '../Popup';
import Notification from '../Notification';
import ConfirmDialog from '../ConfirmDialog';
import './table.css';
import PageHeader from '../PageHeader';
import confiData from '../../data/confiData.json';
import ConfiForm from '../Forms/ConfiForm';






const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '50%',
        color: '#fff'
    },
    newButton: {
        
        right: '10px',
        color: '#1a1359',
        borderColor: '#1a1359',
        justifyContent:'center',
        alignItems: 'center',
        display:'flex-start'
    },
  
}))

const headCells = [
    { id: 'titre', label: 'tire' },
    { id: 'categorie', label: 'catégorie' },
    { id: 'contenu', label: 'contenu' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const ConfiTable = (props) => {

    const classes = useStyles();  
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [records, setRecords] = useState(confiData);
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
 
    const {
        TblContainer, 
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells,filterFn);

    const handleSearchTitre = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.titre.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchCat = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.categorie.toLowerCase().includes(target.value))
            }
        })
    }

    
   

   

    const addOrEdit = async (obj,resetForm) => { 
    try{ 
       
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setNotify({
                isOpen: true,
                message: 'Validation avec Succes',
                type: 'success'
          })
        }catch (error) {
        console.error(error);
      }
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = async (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setNotify({
            isOpen: true,
            message: 'Suppression avec Success',
            type: 'error'
        })
    }

    return (
        <Box p={2}>
             <Paper>
                <PageHeader
                title="Paramètres de confifentialités"
                subTitle="confidentialités , Ajouter ,supprimer, modifier"
                icon={<Policy fontSize="large" />}
              
             
            />
              
                <Toolbar>
                <Grid container spacing={2}  xs={12} >
                        <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par titre"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchTitre}  
                            />
                       </Grid>
                       <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par catégorie"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchCat}  
                            />
                       </Grid>
                       
                    
                        
                      
                      
                       <Grid item lg={4} md={6} xs={12} >
                             <Controls.Button 
                                text="Ajouter"
                               
                                variant="outlined"
                                startIcon={<AddIcon/>}
                                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                                className={classes.centerButton}
                                
                            />
                       </Grid>
                    </Grid>
                </Toolbar>
                </Paper>
              
               
                  
                  <Grid className="container">
                    <TblContainer>
                        <TblHead/>
                        <TableBody>
                        {
                                recordsAfterPagingAndSorting().map((item,index) =>
                                    (<TableRow key={index}>
                                        <TableCell>{item.titre}</TableCell>
                                        <TableCell>{item.categorie}</TableCell>
                                        <TableCell>Ouvrir pour voir...</TableCell>
                                        <TableCell>
                                        
                                            <Controls.ActionButton
                                                color="primaryLight"
                                                onClick={() => { openInPopup(item) }}
                                              >
                                                <EditOutlinedIcon fontSize="small" /> 
                                            </Controls.ActionButton>
                                        
                                       
                                            <Controls.ActionButton
                                                color="secondary"
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        isOpen: true,
                                                        title: 'êtes-vous sûr de vouloir supprimer cet enrégistrement?',
                                                        subTitle: "Vous pouvez annuler cette opération",
                                                        onConfirm: () => { onDelete(item.id) }
                                                    })
                                                }}
                                              >
                                                <CloseIcon fontSize="small" />
                                            </Controls.ActionButton>
                                        
                                        </TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                    </Grid>
           
             <Popup
                  title="Formulaire de confidentialités"
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
             >
                 <ConfiForm
                   recordForEdit={recordForEdit}
                   addOrEdit={addOrEdit}
                 />
                 
             </Popup>
             <Notification
                notify={notify}
                setNotify={setNotify}
            />
             <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
             />
        </Box>
    )
}

export default ConfiTable
