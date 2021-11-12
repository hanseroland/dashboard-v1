import React, {useState} from 'react';
import { Box,makeStyles, Grid, InputAdornment, Paper,TableCell,TableRow, Toolbar, TableBody } from '@material-ui/core';
import Controls from '../controls/Controls';
import {  Search } from '@material-ui/icons';
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
import posteData from '../../data/posteData.json';
import PosteForm from '../Forms/PosteForm';
import { FaNewspaper } from 'react-icons/fa';





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
    { id: 'titre_poste', label: 'titre' },
    { id: 'auteur', label: 'auteur' },
    { id: 'categorie', label: 'categorie' },
    { id: 'type', label: 'type' },
    { id: 'visibilite', label: 'visibilite' },
    { id: 'contenu', label: 'contenu' },
    { id: 'image_description', label: 'Description' },
    { id: 'date_pub', label: 'date_pub' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const PosteTable = (props) => {
    const classes = useStyles();  

    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [records, setRecords] = useState(posteData);
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
                    return items.filter(x => x.titre_poste.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchAuteur = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.auteur.toLowerCase().includes(target.value))
            }
        })
    }

    const handleSearchType = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.type.toLowerCase().includes(target.value))
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
                    return items.filter(x => x.date_pub.toLowerCase().includes(target.value))
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
                title="Gestion des Poste"
                subTitle="Ajouter un poste, modifier et supprimer"
                icon={<FaNewspaper fontSize="large" />}
              
             
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
                                onChange={handleSearch}
                            />
                       </Grid>
                       <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par auteur"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearchAuteur}
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
                        <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par type"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearchType}
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
                                        <TableCell>{item.titre_poste}</TableCell>
                                        <TableCell>{item.auteur}</TableCell>
                                        <TableCell>{item.categorie}</TableCell>
                                        <TableCell>{item.type}</TableCell>
                                        <TableCell>{item.visibilite}</TableCell>
                                        <TableCell>{item.contenu.substring(0,10)}...</TableCell>
                                        <TableCell>{item.description_image}</TableCell>
                                        <TableCell>{item.date_pub}</TableCell>    
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
                  title="Formulaire de postes"
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
             >
                 <PosteForm
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

export default PosteTable
