import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {userContext} from '../../context/userContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const nav = useNavigate();
  const {user, logout} = useContext(userContext);
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      toggleForm();
      logout();
    } catch (error) {
      console.log(error)
    }
  }

  const [form, setFormState] = useState(false);

  function toggleForm() {
    console.log(form);
    setFormState(formState => !formState);
  }

    return (
        <nav className='nav-bar'>
        <h1>ClubHub</h1>
        <ul>
          <Link to="/home">{user &&<li>Home</li>}</Link>
          <Link to="/">{!user &&<li>About</li>}</Link>
          <Link to="/communication">{user &&<li>Communication</li>}</Link>
          <Link to="/finances">{user && <li>Finances</li>}</Link>
          <Link to="/login">{!user && (<li>Login</li>)}</Link>
          <Link to="/register">{!user && (<li>Register</li>)}</Link>
          {user && (<li onClick={toggleForm} >Logout</li>)}
        </ul>
        {form && (
          <div className='logout-form'>
            <h2 className='logout-title'>Confirm Logout</h2>
            <button className='logout-button notOut' onClick={toggleForm}>Cancel</button>
            <button className='logout-button out' onClick={handleLogout}>Log out</button>
          </div>
        )}

        
    </nav>
    );
  }

