import './Footer.css'

export function Footer() {
  return (
    <div>
      <div className="seperator"></div>
      <footer className="footer">
        <div className="footer-nav">
          <h4 className='footer-title'>Explore:</h4>
          <nav className='footer-nav-links'>
            <a href="#products">Products</a>
            <a href="#guides">Guides</a>
            <a href="#about">About</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EcoHabit</p>
        </div>
      </footer>
    </div>
  );
}