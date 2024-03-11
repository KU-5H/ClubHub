import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
      <nav>
      <h1>ClubHub</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/communication">Communication</Link></li>
        <li><Link to="/finances">Finances</Link></li>
      </ul>
    </nav>
    );
  }

