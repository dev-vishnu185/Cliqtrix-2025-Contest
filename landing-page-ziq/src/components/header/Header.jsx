import { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logos/logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="header">
      <div className="header-wrapper">
        <nav className='nav-bar'>
          
          <button
            className='menu-button'
            onClick={toggleMenu}
          >
            <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
          </button>

          <a href="#home" className='logo-holder'>
            <img className='logo' src={Logo} alt="Logo" />
          </a>
          
          <div className={`links-container ${isOpen ? 'open' : ''}`}>
            <a href="#products">Products</a>
            <a href="#guides">Guides</a>
            <a href="#about">About</a>
          </div>
        </nav>
      </div>

      <div
        className={`backdrop ${isOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      ></div>
    </header >
  );
}