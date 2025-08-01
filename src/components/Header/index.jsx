import { NavLink, Link } from 'react-router'
import KasaLogo from '../../assets/LOGO.png'
import './header.scss'
import { useRef, useEffect } from 'react'


function Header() {

  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");
  return (
    <div className="main">
      <div className="logo">
        <img src={KasaLogo} />
      </div>
      <nav>
        <NavLink className={classNameFunc} to="/">Accueil</NavLink>
        <NavLink className={classNameFunc} to="/Apropos">A propos</NavLink>
      </nav>
    </div>
  )
}

export default Header