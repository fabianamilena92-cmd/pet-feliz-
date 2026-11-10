import { Link } from "react-router-dom";

function NaoEncontrada() {
  return <div className="not-found"><span className="not-found-paw">🐾</span><span className="eyebrow">OPS, PERDEMOS O CAMINHO</span><h1>404</h1><h2>Essa página saiu para passear.</h2><p>Mas a gente encontra o caminho de volta juntinhos.</p><Link className="button button-primary" to="/">Voltar para o início <span aria-hidden="true">→</span></Link></div>;
}

export default NaoEncontrada;
