// Importa as ferramentas para criar as rotas do site
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importa os componentes das páginas
import Menu from "./components/Menu.jsx";
import Home from "./pages/Home.jsx";
import Servicos from "./pages/Servicos.jsx";
import Contato from "./pages/Contato.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

function App() {
  return (
    // Controla a navegação entre as páginas
    <BrowserRouter>
      <div className="site-shell">

        {/* Menu que aparece em todas as páginas */}
        <Menu />

        <main>
          {/* Define as rotas do site */}
          <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Home />} />

            {/* Página de serviços */}
            <Route path="/servicos" element={<Servicos />} />

            {/* Página de contato */}
            <Route path="/contato" element={<Contato />} />

            {/* Página exibida quando a rota não existe */}
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>

        {/* Rodapé do site */}
        <footer className="site-footer">
          <span>🐾 Pet Feliz</span>
          <span>Feito com carinho para quem faz parte da família.</span>
        </footer>

      </div>
    </BrowserRouter>
  );
}

// Exporta o componente para ser usado no projeto
export default App;