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
        <div>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <label>Password</label>
                <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
