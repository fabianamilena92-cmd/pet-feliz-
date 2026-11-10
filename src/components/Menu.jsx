// Importa o NavLink para navegar entre as páginas
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    // Cabeçalho do site
    <header className="topbar">

      {/* Logo e nome do Pet Feliz */}
      <NavLink className="brand" to="/" aria-label="Pet Feliz, página inicial">
        <span className="brand-mark" aria-hidden="true">🐾</span>
        <span>
          pet<span className="brand-accent">feliz</span>
          <small>cuidado com carinho</small>
        </span>
      </NavLink>

      {/* Menu de navegação entre as páginas */}
      <nav className="navigation" aria-label="Navegação principal">

        {/* Link para a página inicial */}
        <NavLink to="/" end>Início</NavLink>

        {/* Link para os serviços */}
        <NavLink to="/servicos">Serviços</NavLink>

        {/* Link para agendar uma visita */}
        <NavLink to="/contato" className="nav-cta">
          Agendar visita <span aria-hidden="true">↗</span>
        </NavLink>

      </nav>
    </header>
  );
}

// Exporta o menu para ser usado no App
export default Menu;
