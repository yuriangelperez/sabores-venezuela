import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Sabores de Venezuela</h1>

      <nav className="navegacion">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/compartir">Comparte tu receta</NavLink>
      </nav>
    </header>
  );
}

export default Header;
