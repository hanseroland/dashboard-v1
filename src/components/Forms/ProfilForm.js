import React,{useEffect,useState} from 'react'
import { 
        Box,
        Card, 
        CardContent, 
        CardHeader, 
        Divider, 
        Grid, 
 } from '@material-ui/core'
import { Form, useForm } from '../useForm'
import Controls from '../controls/Controls' 






const ProfilForm = (props) => {

    const {addOrEdit, recordForEdit,currentID} = props


    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; // image types
   


    const initialValues = {
        id:'',
        nom: '',
        secteur_activite:'',
        telephone: '',
        email: '',
        site_internet: '',
        description:'',
        adresse:'',
        facebook:'',
        linkedin:'',
        logo: '',
       
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "Champ requis."
        if ('secteur_activite' in fieldValues)
            temp.secteur_activite = fieldValues.secteur_activite ? "" : "Champ requis."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email non valide."
        if ('telephone' in fieldValues)
            temp.telephone = fieldValues.telephone.length > 8 ? "" : "Minimum de 9 nombre requis."
        if ('site_internet' in fieldValues)
            temp.site_internet = fieldValues.site_internet ? "" : "Champ requis."
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "Champ requis."
        if ('adresse' in fieldValues)
            temp.adresse = fieldValues.adresse ? "" : "Champ requis."
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
    }= useForm(initialValues, true, validate);

    const getInfo = async (id) => {
         setValues("");
    };

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
            addOrEdit(values,file,resetForm);
        }
    } 

    useEffect(() => {
        if (currentID === "")
            setValues({
                ...initialValues
            })
        else
           getInfo(currentID);
           
    }, [currentID])

    return (
        <Form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
          <Card>
              <CardHeader
                  subheader="Vous pouvez éditer vos informations"
                  title="Profil"
              />
              <Divider/>
              <CardContent>
                  <Grid
                      container
                      spacing={3}
                  >
                      <Grid item md={6} xs={12}>
                              <Controls.Input
                                  name="nom"
                                  label="nom"
                                  value={values.nom}
                                  onChange={handleInputChange}
                                  error={errors.nom_recruteur}
                              />
                    
                              <Controls.Input
                                  name="secteur_activite"
                                  label="secteur_activite"
                                  value={values.secteur_activite}
                                  onChange={handleInputChange}
                                  error={errors.secteur_activite}
                              />
                                 <Controls.Input
                                  name="adresse"
                                  label="adresse"
                                  value={values.adresse}
                                  onChange={handleInputChange}
                                  error={errors.adresse}
                              />
                               <Controls.Input
                                  name="telephone"
                                  label="telephone"
                                  value={values.telephone}
                                  onChange={handleInputChange}
                                  error={errors.telephone}
                              />
                             
                      </Grid>
                     
                                       
                      <Grid item md={6} xs={12}>
                             <Controls.Input
                                  name="email"
                                  label="email"
                                  value={values.email}
                                  onChange={handleInputChange}
                                  error={errors.email}
                              />
                              <Controls.Input
                                  name="site_internet"
                                  label="site_internet"
                                  value={values.site_internet}
                                  onChange={handleInputChange}
                                  error={errors.site_internet}
                              />
                               <Controls.Input
                                  name="facebook"
                                  label="facebook"
                                  value={values.facebook}
                                  onChange={handleInputChange}
                                  error={errors.facebook}
                              />
                            <Controls.InputFile 
                                  name="logo"
                                  label="Télécharger le logo"
                                  onChange={handleInputFileChange}
                                  error={errors.logo}
                              />
                      </Grid>
                    
                      <Grid item md={12} xs={12}>
                              <Controls.Input
                                  name="description"
                                  label="description"
                                  value={values.description}
                                  onChange={handleInputChange}
                                  error={errors.description}
                                  rows="5"
                                  multiline="multiline"
                              />
                         
                      </Grid>
                     
                  </Grid>
              </CardContent>
              <Divider />
              <Box
                  display="flex"
                  justifyContent="flex-end"
                  p={2}
              >
                 <Controls.Button
                          type="submit"
                          text="Valider" />
                      <Controls.Button
                          text="Effacer"
                          color="default"
                      onClick={resetForm} />
              </Box>
          </Card>
      </Form>
    )
}

export default ProfilForm
