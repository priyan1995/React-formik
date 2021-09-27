import react from "react";
import { useFormik } from "formik";


export const YoutubeForm = () => {


    const initialValues = {       
            name: '',
            email: '',
            channel: ''       
    }
    
    const onSubmit = values => {
        console.log('Submitted', values)
    }

    const validate = values => {
        let errors = {}

        if(!values.name){
            errors.name = 'Required'
        }

        if(!values.email){
            errors.email = 'Required'
        }else if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = 'Invalid Email Format'
        }

        if(!values.channel){
            errors.channel = 'Required'
        }



        return errors
    }

    const youtubeForm = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    // console.log('Values: ', youtubeForm.values);

    return (
        <div>

            <form onSubmit={youtubeForm.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                onChange={youtubeForm.handleChange}
                value={youtubeForm.values.name}
                />

                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                onChange ={youtubeForm.handleChange}
                value={youtubeForm.values.email}
                 />

                <label htmlFor="channel">Channel</label>
                <input 
                type="text" 
                id="channel" 
                name="channel" 
                onChange={youtubeForm.handleChange}
                value={youtubeForm.values.channel}

                />

                <button type="submit">Submit</button>
                {/* to avoid warning please define button type as 'submit' */}

            </form>
        </div>
    )

}