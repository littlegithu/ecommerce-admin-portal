import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';   // <-- change to your actual file name

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Corteiz Logo" className="navbar-logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/admin">Admin Portal</NavLink>
      </div>
    </nav>
  );
}