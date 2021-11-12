import { Avatar, Grid ,  makeStyles, } from '@material-ui/core'
import React, {useState, useEffect }  from 'react'
import Controls from '../controls/Controls'
import { Form, useForm } from '../useForm'
import {getPosteType,getVisibility,getCategoriePost} from '../../data/collection'
import { format } from 'date-fns'




const useStyles = makeStyles((theme)=> ({
  
    avatar:{
        height:100,
        width:100

    }
}));

const initialValues = {
    id: '',
    titre_poste: '',
    auteur: '',
    contenu: '',
    image_poste: '',
    visibilite:'',
    categorie:'',
    type:'',
    description_image:'',
    type: '',
    date_pub: format(new Date(), "dd MMM yyyy"),
  
}



const PosteForm = (props) => {

    const {addOrEdit, recordForEdit} = props
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; // image types

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('titre_poste' in fieldValues)
            temp.titre_poste = fieldValues.titre_poste ? "" : "Champ requis."
        if ('auteur' in fieldValues)
            temp.auteur = fieldValues.auteur ? "" : "Champ requis."
        if ('contenu' in fieldValues)
            temp.contenu = fieldValues.contenu ? "" : "Champ requis."
        if ('description_image' in fieldValues)
            temp.description_image = fieldValues.description_image ? "" : "Champ requis."
        if ('visibilite' in fieldValues)
            temp.visibilite = fieldValues.visibilite.length !== 0 ? "" : "Champ requis."
       
      
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
                              name="titre_poste"
                              label="titre_poste"
                              value={values.titre_poste}
                              onChange={handleInputChange}
                              error={errors.titre_poste}
                        />
                         <Controls.Input
                              name="auteur"
                              label="auteur"
                              value={values.auteur}
                              onChange={handleInputChange}
                              error={errors.auteur}
                        />
                       
                         <Controls.Input
                              name="description_image"
                              label="description_image"
                              value={values.description_image}
                              onChange={handleInputChange}
                              error={errors.description_image}
                        />
                         <Controls.Select
                            name="categorie"
                            label="categorie"
                            value={values.categorie}
                            onChange={handleInputChange}
                            options={getCategoriePost()}
                            error={errors.categorie}
                        />
                    </Grid>
                   
                    <Grid item xs={6}> 
                       
                       
                      <Controls.InputFile
                                    name="image_poste"
                                    label="Télécharger une photo"
                                    onChange={handleInputFileChange}
                                    error={errors.image_poste}
                                    
                       />
                       <Controls.DatePicker
                            name="date_pub" 
                            label="date_pub"
                            value={values.date_pub}
                            onChange={handleInputChange}
                        />
                         <Controls.Select
                            name="visibilite"
                            label="visibilité"
                            value={values.visibilite}
                            onChange={handleInputChange}
                            options={getVisibility()}
                            error={errors.visibilite}
                        />
                         <Controls.Select
                            name="type"
                            label="type"
                            value={values.type}
                            onChange={handleInputChange}
                            options={getPosteType()}
                            error={errors.type}
                        />
                    </Grid>
                    
                   
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="contenu"
                              label="contenu"
                              multiline="multiline"
                              rows="10"
                              value={values.contenu}
                              onChange={handleInputChange}
                              error={errors.contenu}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                          <Avatar
                            className={classes.avatar}
                            src={values.image_poste} 
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

export default PosteForm
