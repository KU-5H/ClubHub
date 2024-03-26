import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
      <nav className='nav-bar'>
      <h1>ClubHub</h1>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/communication"><li>Communication</li></Link>
        <Link to="/finances"><li>Finances</li></Link>
      </ul>
    </nav>
    );
  }

