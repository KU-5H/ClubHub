import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext'

export default function Login() {
    const {user, login} = useContext(UserContext)
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        if(user) {
            navigate('/home')
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try {
            login(email, password)
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div className="login-page">
            <center>
            <form className="login-bar" onSubmit={handleLogin}>
                <label>Email</label>
                <div></div>
                <input class="login-enter-area" type="email" placeholder='Enter email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <div></div>
                <label>Password</label>
                <div></div>
                <input class="login-enter-area" type="password" placeholder='Enter Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                <div></div>
                <button class="login-submit" type='submit'>Login</button>
            </form>
            </center>
        </div>
    )
}
