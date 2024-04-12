import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext'
import { Link } from 'react-router-dom';
import mountain from './../assets/mountain.jpg'
import { RiQuestionnaireLine } from "react-icons/ri";
import logo from './../assets/logo.png'

export default function Login({ setShowNavbar, setShowFooter }) {
    const {user, login} = useContext(userContext)
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        setShowNavbar(false);
        setShowFooter(false);
    
        return () => {
          setShowNavbar(true);
          setShowFooter(true);
        };
      }, []);

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
            <form className="login-bar" onSubmit={handleLogin}>
                    <div className='login-navbar login-logo'>
                        <img className='logo-icon' src={logo} alt="" />
                        <Link to='/'><li className='login-link'><RiQuestionnaireLine /> About</li></Link>
                    </div>
                    <div className='login-title'>Login</div>
                    <div className='login-elements'>
                        <div className='login-email'>
                        <label>Email address</label>
                            <div></div>
                            <input className="login-enter-area" type="email" placeholder='Enter email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                        </div>
                        <div className='login-password'>
                            <label>Password</label>
                            <div></div>
                            <input className="login-enter-area" type="password" placeholder='Enter Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                        </div>
                    </div>
                    <div className='login-submitor'>
                        <button className="login-submit" type='submit'>Login</button>
                        <div className='register-redirect'>Don't have an account? <Link to="/register" className='register-text'>Register</Link> here!</div>
                    </div>
            </form>
            <img className='login-image' src={mountain}/>
        </div>
    )
}
