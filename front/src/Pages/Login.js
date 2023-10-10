import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/Auth';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleChange = (e) =>{
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userForm = {
            email: email,
            password: password
        }

        axios.post(`${process.env.REACT_APP_API}/login`, userForm, {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data)
            getCookie()
            navigate("/")
        })
        
       
    }
    
    return (
        <div className="login-container">
        <div className="login-box">
            <h2>Se connecter</h2>
            <form  method="post" onSubmit={handleSubmit}>
                <div className="textbox">
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange}required />
                </div>
                <button type="submit" className="btn"> Se connecter</button>
                <NavLink to={"/inscription"}><p className="forgot-password">Pas encore inscrit?</p></NavLink>
            </form>
        </div>
    </div>
    );
};

export default Login;