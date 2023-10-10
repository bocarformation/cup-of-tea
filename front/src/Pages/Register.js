import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
const [login, setLogin] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()


const handleChange = (e) =>{
    if(e.target.name === "login"){
        setLogin(e.target.value)
    }else if(e.target.name === "email"){
        setEmail(e.target.value)
    }else if(e.target.name === "password"){
        setPassword(e.target.value)
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const userForm = {
        login: login,
        email: email, 
        password: password
    }

    axios.post(`${process.env.REACT_APP_API}/register`, userForm)
    .then((res)=> {
        console.log(res.data)
    })
}
    return (
        <div className="login-container">
        <div className="login-box">
            <h2>S'inscrire</h2>
            <form  method="post" onSubmit={handleSubmit}>
            <div className="textbox">
                    <input type="text" placeholder="Login" name="login" onChange={handleChange} required />
                </div>
                <div className="textbox">
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Mot de passe" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn"> S'inscrire</button>
                <NavLink to={"/connexion"}><p className="forgot-password">Vous avez déjà un compte?</p></NavLink>
            </form>
        </div>
    </div>
    );
};

export default Register;