import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextError } from './TextError';
import DataView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BirthDay = (props) => {

    const { label, name, ...rest } = props

    return (
        <>

            <div className="form-control">
                <label htmlFor={name} >{label}</label>
                <Field name={name}>

                    {({ form, field }) =>{

                        const { setFieldValue } = form
                        const { value } = field

                        return (
                            <DataView  
                            id={name}
                            {...field}
                            {...rest}
                            selected = {value}
                            onChange = {val => setFieldValue(name,val)}

                            />
                        )

                    } }

                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
           

        </>
    )
}