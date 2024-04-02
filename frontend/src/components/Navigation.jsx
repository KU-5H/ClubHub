import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import {UserContext} from '../../context/userContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const nav = useNavigate()
  const {user, logout} = useContext(UserContext)
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      logout();
    } catch (error) {
      console.log(error)
    }
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
          <Link to="/logout" onClick={handleLogout}>{user && (<li>Logout</li>)}</Link>
        </ul>
    </nav>
    );
  }

