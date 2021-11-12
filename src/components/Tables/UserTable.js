import React, {useState} from 'react';
import { Box,makeStyles, Grid, InputAdornment, Paper,TableCell,TableRow, Toolbar, TableBody } from '@material-ui/core';
import Controls from '../controls/Controls';
import {  PeopleOutlineTwoTone, Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import useTable from '../useTable';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { format } from 'date-fns';
import Popup from '../Popup';
import Notification from '../Notification';
import ConfirmDialog from '../ConfirmDialog';
import './table.css';
import PageHeader from '../PageHeader';
import UserForm from '../Forms/UserForm';
import userData from '../../data/userData.json';





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
    { id: 'nom', label: 'Nom' },
    { id: 'prenom', label: 'Prénom' },
    { id: 'email', label: 'Email' },
    { id: 'role', label: 'Rôle' },
    { id: 'date_ajout', label: 'Date ajout' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const UserTable = (props) => {
    const classes = useStyles();  

    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [records, setRecords] = useState(userData);
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

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.nom.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchPrenom = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.prenom.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchRole = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.role.toLowerCase().includes(target.value))
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
                title="Gestion des utilisateurs"
                subTitle="Ajouter un utilisateur, modifier et supprimer"
                icon={<PeopleOutlineTwoTone fontSize="large" />}
              
             
            />
              
                <Toolbar>
                    <Grid container spacing={2}  xs={12} >
                        <Grid item lg={3} md={6} xs={6}>
                        <Controls.Input
                                label="Rechercher par nom"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearch}  
                            />
                       </Grid>
                       <Grid item lg={3} md={6} xs={6}>
                        <Controls.Input
                                label="Rechercher par prénom"
                                className={classes.searchInput}
                                
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchPrenom}  
                            />
                       </Grid>
                       
                     
                        <Grid item lg={3} md={6} xs={6}>
                        <Controls.Input
                                label="Rechercher par rôle"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchRole}  
                            />  
                       </Grid>
                        <Grid item lg={3} md={6} xs={6} >
                             <Controls.Button 
                                text="Ajouter"
                                color='primary'
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
                                        <TableCell>{item.nom}</TableCell>
                                        <TableCell>{item.prenom}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.role}</TableCell>
                                        <TableCell>{item.date_ajout}</TableCell>
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
                  title="Formulaire d'utilisateurs"
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
             >
                 <UserForm
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

export default UserTable
