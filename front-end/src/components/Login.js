import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Login = (props) => {
    const host = "https://inotebook-5-sheh.onrender.com";
    const [credentials, setCredentials] = useState({ email: "", password: "" });
        let navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //Save auth-token to the local storage
            localStorage.setItem('token',json.authtoken);
            //For Re-directing
           navigate('/');
           props.showAlert('Logged-in Successfully','success')
        }
        else{
            props.showAlert('Invalid Details','danger')
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Login to continue to iNOTEBOOK</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={credentials.email}
                        onChange={onChange}
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={credentials.password}
                        onChange={onChange}
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
