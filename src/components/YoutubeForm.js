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

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Format'
        }

        if (!values.channel) {
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
   // console.log('Errors', youtubeForm.errors);

    return (
        <div>

            <form onSubmit={youtubeForm.handleSubmit}>

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={youtubeForm.handleChange}
                        value={youtubeForm.values.name}
                    />
                    {youtubeForm.errors.name ? <div className="error">{youtubeForm.errors.name}</div> : null}
                </div>


                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={youtubeForm.handleChange}
                        value={youtubeForm.values.email}
                    />
                    {youtubeForm.errors.email ? <div className="error">{youtubeForm.errors.name}</div> : null}
                </div>


                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        onChange={youtubeForm.handleChange}
                        value={youtubeForm.values.channel}
                    />
                    {youtubeForm.errors.channel ? <div className="error">{youtubeForm.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
                {/* to avoid warning please define button type as 'submit' */}

            </form>
        </div>
    )

}