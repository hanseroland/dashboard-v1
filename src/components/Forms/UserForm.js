import React, {useEffect }  from 'react'
import { Grid } from '@material-ui/core'
import Controls from '../controls/Controls'
import { Form, useForm } from '../useForm'
import {getRole} from '../../data/collection'


const initialValues = {
    id:'',
    nom: '',
    prenom: '',
    email: '',
    role: '',
    pasword: '',
    date_ajout: new Date(), 
}


 
const UserForm = (props) => {

    const {addOrEdit, recordForEdit} = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "Champ requis."
        if ('prenom' in fieldValues)
            temp.prenom = fieldValues.prenom ? "" : "Champ requis."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email non valide."  
        if ('password' in fieldValues)
            temp.password = (/^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\| \[\]\/'\,\.\`\~]{8,16}$/).test(fieldValues.password) ? "" : "Le mot de passe doit contenir au moins 8 caractère(Majuscule,minuscule,chiffre,etc)" 
        if ('role' in fieldValues)
            temp.role = fieldValues.role.length !== 0 ? "" : "Champ requis."
      
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
                              label="nom"
                              value={values.nom}
                              onChange={handleInputChange}
                              error={errors.nom}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="prenom"
                              label="prenom"
                              value={values.prenom}
                              onChange={handleInputChange}
                              error={errors.prenom}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="email"
                              label="email"
                              value={values.email}
                              onChange={handleInputChange}
                              error={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="password"
                              label="mot de passe"
                              type="password"
                              value={values.password}
                              onChange={handleInputChange}
                              error={errors.password}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <Controls.Select
                            name="role"
                            label="role"
                            value={values.role}
                            onChange={handleInputChange}
                            options={getRole()}
                            error={errors.role}
                        />
                    </Grid>
                    
                    <Grid item xs={6}> 
                        <Controls.DatePicker
                            name="date_ajout"
                            label="date_ajout"
                            value={values.date_ajout}
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

export default UserForm
