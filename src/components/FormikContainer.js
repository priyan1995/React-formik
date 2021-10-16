import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl'
  
export const FormikContainer = () => {

    const dropdownOptions = [
        { key: 'Select an Option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

    const radioOptions = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },
        { key: 'Other', value: 'other' }
    ]

    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3'  }

    ]


    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        gender: '',
        checkboxOption: [] 
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is Required'),
        description: Yup.string().required('Description is Required'),
        selectOption: Yup.string().required('Option is Required'),
        gender: Yup.string().required('Gender is Required'),
        checkboxOption: Yup.string().required('Option is Required')
    })
    const onSubmit = values => console.log( "Form data ",  values )

    return(
        <>

    

        <Formik         
        initialValues={initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
        >

            { formik => (
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />

                    <FormikControl control='textarea' label='Description' name='description' />

                    <FormikControl control='select' label="Select a Topic" name='selectOption'  options={dropdownOptions} />

                    <FormikControl control='radio' label='Select a Gender' name='gender' options={radioOptions} />
 
                    <FormikControl control='checkbox' label='Choose Options' name='checkboxOptions' options={checkboxOptions} />

                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>

        </>
    )


}