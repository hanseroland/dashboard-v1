import { Grid } from '@material-ui/core'
import React, {useEffect }  from 'react'
import Controls from '../controls/Controls'
import { Form, useForm } from '../useForm'


const initialValues = {
    id: '',
    nom:'',
    email: '',
    objet: '',
    telephone: '',
    message: '',
    societe: '',
    date_envoie: '',
}



const MessageForm = (props) => {

    const {addOrEdit, recordForEdit} = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.titre_offre = fieldValues.nom ? "" : "Champ requis."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email non valide."
        if ('objet' in fieldValues)
            temp.objet = fieldValues.objet ? "" : "Champ requis."
        if ('telephone' in fieldValues)
             temp.telephone = fieldValues.telephone.length > 8 ? "" : "Minimum de 9 nombre requis."
        if ('message' in fieldValues)
             temp.message = fieldValues.message ? "" : "Champ requis."
        if ('societe' in fieldValues)
             temp.societe = fieldValues.societe ? "" : "Champ requis."
       
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

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
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
                              name="nom"
                              label="Nom"
                              value={values.nom}
                              onChange={handleInputChange}
                              error={errors.nom}
                        />
                        <Controls.Input
                              name="email"
                              label="Email"
                              value={values.email}
                              onChange={handleInputChange}
                              error={errors.email}
                        />
                        <Controls.Input
                              name="objet"
                              label="Objet"
                              value={values.objet}
                              onChange={handleInputChange}
                              error={errors.objet}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                       <Controls.Input
                              name="telephone"
                              label="Téléphone"
                              value={values.telephone}
                              onChange={handleInputChange}
                              error={errors.telephone}
                        />
                         <Controls.Input
                              name="societe"
                              label="Société"
                              value={values.societe}
                              onChange={handleInputChange}
                              error={errors.societe}
                        />
                        <Controls.Input
                              name="date_envoie"
                              label="Date d'envoie"
                              value={values.date_envoie}
                              onChange={handleInputChange}
                              error={errors.date_envoie}
                        />
                        
                    </Grid>
                   
                    <Grid item xs={12}> 
                        <Controls.Input
                                name="message"
                                label="Message"
                                rows="8"
                                multiline="multiline"
                                value={values.message}
                                onChange={handleInputChange}
                                error={errors.message}
                            />
                    </Grid>
                    
                 
                  { /* <div>
                        <Controls.Button
                            type="submit"
                            text="Valider" />
                        <Controls.Button
                            text="Effacer"
                            color="default"
                            onClick={resetForm} />
                  </div>*/}
                </Grid>
        </Form>
    )
}

export default MessageForm
