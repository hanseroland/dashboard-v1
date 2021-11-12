import React, {useState} from 'react';
import { Box,makeStyles, Grid, InputAdornment, Paper,TableCell,TableRow, Toolbar, TableBody } from '@material-ui/core';
import Controls from '../controls/Controls';
import {  Message, Search } from '@material-ui/icons';
import useTable from '../useTable';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Popup from '../Popup';
import Notification from '../Notification';
import ConfirmDialog from '../ConfirmDialog';
import './table.css';
import PageHeader from '../PageHeader';
import messageData from '../../data/messageData.json';
import MessageForm from '../Forms/MessageForm';






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
    { id: 'email', label: 'Email' },
    { id: 'objet', label: 'Objet' },
    { id: 'telephone', label: 'Téléphone' },
    {id: 'societe', label: 'Société' },
    { id: 'message', label: 'Message' },
    { id: 'date_envoie', label: 'Date' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const MessageTable = (props) => {

    const classes = useStyles();  
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [records, setRecords] = useState(messageData);
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

    const handleSearchNom = e => {
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

    const handleSearchEmail = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.email.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchObjet = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.objet.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchPhone = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.telephone.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchDate = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.date_envoie.toLowerCase().includes(target.value))
            }
        })
    }


    const handleSearchSociete = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.societe.toLowerCase().includes(target.value))
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
                title="Gestion des Messages"
                subTitle="Messages reçus"
                icon={<Message fontSize="large" />}
              
             
            />
              
                <Toolbar>
                <Grid container spacing={2}  xs={12} >
                        <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par nom"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchNom}  
                            />
                       </Grid>
                       <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par email"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchEmail}  
                            />
                       </Grid>
                       
                      <Grid item lg={4} md={6} xs={12} >
                           <Controls.Input
                                label="Rechercher par objet"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchObjet}  
                            />
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par date"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchDate}  
                            />  
                       </Grid>
                       <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par phone"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchPhone}  
                            />  
                       </Grid>
                       <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par société"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search /> 
                                    </InputAdornment>)
                                }}  
                                onChange={handleSearchSociete}  
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
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.objet}</TableCell>
                                        <TableCell>{item.telephone}</TableCell>
                                        <TableCell>{item.societe}</TableCell>
                                        <TableCell>{item.message.substring(0,10)}...</TableCell>
                                        <TableCell>{item.date_envoie}</TableCell> 
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
                  title="Formulaire de messages"
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
             >
                 <MessageForm
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

export default MessageTable
