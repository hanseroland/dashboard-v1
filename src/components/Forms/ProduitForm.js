import { Avatar, Grid ,  makeStyles, } from '@material-ui/core'
import React, {useState, useEffect }  from 'react'
import Controls from '../controls/Controls'
import { Form, useForm } from '../useForm'
import {getCategorieProd} from '../../data/collection'
import { format } from 'date-fns'




const useStyles = makeStyles((theme)=> ({
  
    avatar:{
        height:100,
        width:100

    }
}));

const initialValues = {
    id: '',
    reference: '',
    nom: '',
    categorie: '',
    prix_achat: '',
    prix_vente:'',
    quantite:'',
    date_ajout: format(new Date(), "dd MMM yyyy"),
  
}



const ProduitForm = (props) => {

    const {addOrEdit, recordForEdit} = props
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; // image types

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('reference' in fieldValues)
            temp.reference = fieldValues.reference ? "" : "Champ requis."
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "Champ requis."
        if ('prix_achat' in fieldValues)
            temp.prix_achat = fieldValues.prix_achat.length > 3 ? "" : "Minimum de 3 nombre requis."
        if ('prix_vente' in fieldValues)
            temp.prix_vente = fieldValues.prix_vente.length > 3 ? "" : "Minimum de 3 nombre requis."
        if ('quantite' in fieldValues)
            temp.quantite = fieldValues.quantite.length > 0 ? "" : "Minimum de 9 nombre requis."
        if ('categorie' in fieldValues)
            temp.categorie = fieldValues.categorie.length !== 0 ? "" : "Champ requis."
       
      
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } =useForm(initialValues, true, validate);

    const handleInputFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('')
        }
        else { 
            setFile(null);
            alert('Sélectionner une image valide de type (jpg, jpeg ou png)');
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values,file, resetForm);
        }
    }

   

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form  onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="reference"
                              label="reference"
                              value={values.reference}
                              onChange={handleInputChange}
                              error={errors.reference}
                        />
                         <Controls.Input
                              name="nom"
                              label="nom"
                              value={values.nom}
                              onChange={handleInputChange}
                              error={errors.nom}
                        />
                       
                         <Controls.Input
                              name="prix_achat"
                              label="prix_achat"
                              value={values.prix_achat}
                              onChange={handleInputChange}
                              error={errors.prix_achat}
                        />
                         <Controls.Input
                              name="prix_vente"
                              label="prix_vente"
                              value={values.prix_vente}
                              onChange={handleInputChange}
                              error={errors.prix_vente}
                        />
                        
                    </Grid>
                   
                    <Grid item xs={6}> 
                    <Controls.Input
                              name="quantite"
                              label="quantite"
                              value={values.quantite}
                              onChange={handleInputChange}
                              error={errors.quantite}
                        />
                       
                    <Controls.Select
                            name="categorie"
                            label="categorie"
                            value={values.categorie}
                            onChange={handleInputChange}
                            options={getCategorieProd()}
                            error={errors.categorie}
                        />
                     
                       <Controls.DatePicker
                            name="date_ajout" 
                            label="date_ajout"
                            value={values.date_pub}
                            onChange={handleInputChange}
                        />
                       
                    </Grid>
                    
                  
                  
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Valider" />
                        <Controls.Button
                            text="Effacer"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
        </Form>
    )
}

export default ProduitForm
