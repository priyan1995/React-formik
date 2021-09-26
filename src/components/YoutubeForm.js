import react from "react";
import { useFormik } from "formik";


export const YoutubeForm = () => {

    const youtubeForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        }
    })

    console.log('Values: ', youtubeForm.values);

    return (
        <div>

            <form>

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

                <button>Submit</button>

            </form>
        </div>
    )

}