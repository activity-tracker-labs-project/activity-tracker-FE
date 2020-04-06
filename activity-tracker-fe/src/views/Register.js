import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import '../styles/Register.css';


const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field"),
    email: yup.string().email().required("An email is required"),
    password: yup.string().required("Please choose a password").min(8, "must be at least 8 characters"),
    role: yup.string(),
})



export default function Register(props){

    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });

    //state for errors

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [mainPost, setPost] = useState([]);

    //updated form value will check against schema to enable/disable the button
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        })
    },[formState])

    //reach into schema to test each part
    const validateChange = e => {
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors, [e.target.name] : ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors, [e.target.name] : err.errors[0]
            })
        })
    };

    //Shows post under form as well
    const formSubmit = e => {
        e.preventDefault();
        axios
        .post("https://activkid.herokuapp.com/api/auth/register", formState)
        .then( res => {
            console.log(res);
            setPost(res.data);
            props.history.push("/login");
            console.log("success", mainPost);
            //clears the form
            setFormState({
                username: "",
                email: "",
                password: "",
                role: "",
            });
        }).catch( err => {
            console.log(err.res)
        })
    };

    //make sure you are doing this part right, 1:28:33
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState, [e.target.name]: e.target.value};
        validateChange(e);
        setFormState(newFormData);
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="username">
                Username:
                <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formState.username}
                onChange={inputChange}
                />
                {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
            </label><br />
            <label htmlFor="email">
                Email:
                <input
                id="email"
                type="text"
                name="email"
                placeholder="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
            </label><br />
            <label htmlFor="password">
                Password (8 characters minimum):
                <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={formState.password}
                onChange={inputChange}
                />
                {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
            </label><br />
            <label htmlFor="role">
                Select your role:
                <select id="role" name="role" onChange={inputChange}>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                </select>
            </label><br />
            <button disabled={buttonDisabled} type="submit">Submit</button>
            <pre>{JSON.stringify(mainPost, null, 2)}</pre>
        </form>
    )

}