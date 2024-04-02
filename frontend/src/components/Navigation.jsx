import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import {UserContext} from '../../context/userContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const nav = useNavigate()
  const handleLogout = async () => {
    await axios.get('/logout')
    window.location.reload();
  }


  const {user} = useContext(UserContext)

    return (
      <nav className='nav-bar'>
        <h1>ClubHub</h1>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/communication"><li>Communication</li></Link>
          <Link to="/finances"><li>Finances</li></Link>
          <Link to="/login">{!user && (<li>Login</li>)}</Link>
          <Link to="/register">{!user && (<li>Register</li>)}</Link>
          <Link to="/logout" onClick={handleLogout}>{user && (<li>Logout</li>)}</Link>
        </ul>
    </nav>
    );
  }

