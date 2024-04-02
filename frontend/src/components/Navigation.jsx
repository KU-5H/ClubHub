import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import {UserContext} from '../../context/userContext'

export default function Navigation() {
  const handleLogout = () => {
    axios.get('/logout')
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
          <Link to="/login"><li>Login</li></Link>
          <Link to="/register"><li>Register</li></Link>
          <Link to="/logout" onClick={handleLogout}><li>Logout</li></Link>
        </ul>
    </nav>
    );
  }

