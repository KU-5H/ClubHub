import axios from 'axios';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import mountain from './../assets/mountain.jpg'
import { RiQuestionnaireLine } from "react-icons/ri";
import logo from './../assets/logo.png'

export default function Register({ setShowNavbar, setShowFooter }) {
    const nav = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    })

    const [financeData, setFinanceData] = useState({
        unpaidDebt: 0,
        paymentsMade: [],
    })

    useEffect(() => {
        setShowNavbar(false);
        setShowFooter(false);
    
        return () => {
          setShowNavbar(true);
          setShowFooter(true);
        };
      }, []);
    
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        const {name, email, password, role} = data;
        try {
            const {data} = await axios.post('/register', {
                name, email, password, role
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

    const toastNoti = (role) => {
        toast(
            `${role} selected!`,
            {duration: 5000}
        )
    }

    function setRole(num) {
        if (num == 1) {
            const btn1 = refOne.current;
            btn1.className = "role-button selected";
            refTwo.current.className = "role-button";
            refThree.current.className = "role-button";
            setData({...data, role: "Member"}); 
            toastNoti("Member");            
        }
        if (num == 2) {
            const btn2 = refTwo.current;
            btn2.className = "role-button selected";
            refOne.current.className = "role-button";
            refThree.current.className = "role-button";
            setData({...data, role: "Treasurer"}); 
            toastNoti("Treasurer");
        }
        if (num == 3) {
            const btn3 = refThree.current;
            btn3.className = "role-button selected";
            refOne.current.className = "role-button";
            refTwo.current.className = "role-button";
            setData({...data, role: "Admin"}); 
            toastNoti("Admin");
        }
    }

    return (
        <div className='register-page'>
            <form className='register-bar' onSubmit={handleRegister}>
                <div className='login-navbar login-logo'>
                    <img className='logo-icon' src={logo} alt="" />
                    <Link to='/'><li className='login-link'><RiQuestionnaireLine /> About</li></Link>
                </div>
            <div className='register-title'>Register</div>
            <div className='register-elements'>
                <div className='register-name'>
                    <label>Name</label>
                    <input className='register-enter-area' type="text" placeholder='Enter name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                </div>
                <div className='register-email'>
                    <label>Email</label>
                    <input className='register-enter-area' type="email" placeholder='Enter email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                </div>
                <div className='register-password'>
                    <label>Password</label>
                    <input className='register-enter-area' type="password" placeholder='Enter password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                </div>
            </div>
            <h1>Pick a Role</h1>
            <div className='register-buttons'>
                <button type='button' ref={refOne} className='role-button' onClick={() => setRole(1)}>Member</button>
                <button type='button' ref={refTwo} className='role-button' onClick={() => setRole(2)}>Treasurer</button>
                <button type='button' ref={refThree} className='role-button' onClick={() => setRole(3)}>Admin</button>
            </div>
            <button type='submit' className='register-button'>Register</button> 
            <div className='register-redirect'>Already have an Account? <Link to="/login" className='register-text'>Login</Link> here!</div>
            </form>
            <img className='login-image' src={mountain}/>
        </div>   
    )
}
