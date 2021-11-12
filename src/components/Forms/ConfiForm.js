import React, {useEffect, useState }  from 'react'
import { Grid } from '@material-ui/core'
import Controls from '../controls/Controls'
import { Form, useForm } from '../useForm'
import {getReglages} from '../../data/collection'
import MDEditor from "@uiw/react-md-editor";



const initialValues = {
    id:'',
    titre: '',
    categorie: '',
}

 
const ConfiForm = (props) => {

    const {addOrEdit, recordForEdit} = props
    const [mdEditorState, setMdEditoreState] = useState("**Entrer le contenu de votre page ici et prévisualisez le résultat à droite**");
  
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('titre' in fieldValues)
            temp.titre = fieldValues.titre ? "" : "Champ requis."
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

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values,mdEditorState,resetForm);
        }
    }


    const  onMdEditorStateChange = (mdEditorState) => {
        setMdEditoreState(mdEditorState);
    };

   

    useEffect(() => {
        if (recordForEdit != null){
           
            setValues({
                ...recordForEdit
            })
           setMdEditoreState(recordForEdit.contenu)
        }

    }, [recordForEdit])

    return (
        <Form  onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}> 
                        <Controls.Input
                              name="titre"
                              label="titre"
                              value={values.titre}
                              onChange={handleInputChange}
                              error={errors.titre}
                        />
                    </Grid>
                    <Grid item xs={6}> 
                        <Controls.Select
                            name="categorie"
                            label="categorie"
                            value={values.categorie}
                            onChange={handleInputChange}
                            options={getReglages()}
                            error={errors.categorie}
                        />
                    </Grid>
                
                    <Grid item xs={12}> 
                    <MDEditor
                            textareaProps={{
                                placeholder: 'Please enter Markdown text',
                            }}
                            height={500}
                            value={mdEditorState}
                            onChange={onMdEditorStateChange}
                           
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

export default ConfiForm
