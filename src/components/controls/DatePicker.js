import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format } from 'date-fns'
import frLocale from "date-fns/locale/fr";


export default function DatePicker(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        
        target: { 
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="dd/MM/yyyy"
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,format(date,"dd/MM/yyyy")))}

            />
        </MuiPickersUtilsProvider>
    )
}
