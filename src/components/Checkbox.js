import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextError } from './TextError';


export const Checkbox = (props) => {

    const { label, name, options, ...rest } = props

    return (
        <div className="form-control">
            <label>{label}</label>
            <div className="d-flex">
                <Field name={name} {...rest} >
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <React.Fragment key={option.key}>

                                        <input 
                                        type='checkbox'
                                         id={option.value} 
                                         {...field}
                                          value={option.value} 
                                          checked={field.value.includes(option.value)}
                                           />

                                        <label htmlFor={option.value}>{option.key}</label>
                                    </React.Fragment>

                                )
                            })
                        }
                    }

                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
           
        </div>
    )
}