import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const nav = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleRegister = async (e) => {
        e.preventDefault();

        const {name, email, password} = data;
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Registration Successful. Welcome!')
                nav('/login')
            }
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div>
        <form onSubmit={handleRegister}>
            <label>Name</label>
            <input type="text" placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <label>Email</label>
            <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password</label>
            <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Register</button>
        </form>
        </div>
    )
}
