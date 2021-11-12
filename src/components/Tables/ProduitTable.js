import React, {useState} from 'react';
import { Box,makeStyles, Grid, InputAdornment, Paper,TableCell,TableRow, Toolbar, TableBody } from '@material-ui/core';
import Controls from '../controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import useTable from '../useTable';
import CloseIcon from '@material-ui/icons/Close';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Popup from '../Popup';
import Notification from '../Notification';
import ConfirmDialog from '../ConfirmDialog';
import './table.css';
import PageHeader from '../PageHeader';
import produitData from '../../data/produitData.json';
import ProduitForm from '../Forms/ProduitForm';
import { FaBox } from 'react-icons/fa';





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
    { id: 'reference', label: 'Reférence' },
    { id: 'nom', label: 'nom' },
    { id: 'categorie', label: 'categorie' },
    { id: 'prix_achat', label: "Prix d'achat" },
    { id: 'prix_vente', label: "Prix de vente" },
    { id: 'quantite', label: 'Quantité' },
    { id: 'date_ajout', label: 'date_ajout' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]


const ProduitTable = (props) => {
    const classes = useStyles();  

    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [records, setRecords] = useState(produitData);
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

    const handleSearchRef = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.reference.toLowerCase().includes(target.value))
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
                    return items.filter(x => x.date_ajout.toLowerCase().includes(target.value))
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
                title="Gestion des produit"
                subTitle="Ajouter un utilisateur, modifier et supprimer"
                icon={<FaBox fontSize="large" />}
              
             
            />
              
                <Toolbar>
                <Grid container spacing={2}  xs={12} >
                        <Grid item lg={4} md={6} xs={12}>
                        <Controls.Input
                                label="Rechercher par ref"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearchRef}
                            />
                       </Grid>
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
                                onChange={handleSearch}
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
                                label="Rechercher par Cat"
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
                                        <TableCell>{item.reference}</TableCell>
                                        <TableCell>{item.nom}</TableCell>
                                        <TableCell>{item.categorie}</TableCell>
                                        <TableCell>{item.prix_achat}</TableCell>
                                        <TableCell>{item.prix_vente}</TableCell>
                                        <TableCell>{item.quantite}</TableCell>
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
                  title="Formulaire de produit"
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
             >
                 <ProduitForm
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

export default ProduitTable
