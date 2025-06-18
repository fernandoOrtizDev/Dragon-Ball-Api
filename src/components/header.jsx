import titulo from '../assets/titulo.png';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-banner">
      <img src={logo} alt="Logo" className="logo-img" />
      <img src={titulo} alt="Título" className="banner-img" />
    </header>
  );
}

export default Header;
