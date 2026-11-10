// Importa o Link para navegar entre as páginas
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Parte principal da página inicial */}
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> UM LUGAR PARA ABANAR O RABINHO
          </span>

          <h1>Seu melhor amigo merece um dia <em>de rei.</em></h1>

          <p>Banho, tosa e muito carinho para seu pet se sentir em casa — e sair ainda mais lindo.</p>

          {/* Links para agendamento e serviços */}
          <div className="hero-actions">
            <Link className="button button-primary" to="/contato">
              Agendar um horário <span aria-hidden="true">→</span>
            </Link>

            <Link className="text-link" to="/servicos">
              Conheça nossos serviços
            </Link>
          </div>

          {/* Mostra a quantidade de pets atendidos */}
          <div className="happy-note">
            <div className="avatar-stack">
              <span>🐕</span><span>🐈</span><span>🐩</span>
            </div>
            <span>
              <strong>Mais de 500 pets</strong><br />
              felizes por aqui
            </span>
          </div>
        </div>

        {/* Ilustração do cachorrinho */}
        <div className="hero-art" role="img" aria-label="Ilustração de um cachorrinho feliz em um banho de espuma">
          <div className="sun-shape" />
          <span className="sparkle sparkle-one">✳</span>
          <span className="sparkle sparkle-two">✦</span>
          <div className="bubble bubble-one" />
          <div className="bubble bubble-two" />
          <div className="bubble bubble-three" />

          {/* Montagem do desenho do cachorro */}
          <div className="pet-illustration">
            <div className="dog-ear ear-left" />
            <div className="dog-ear ear-right" />
            <div className="dog-face">
              <span className="dog-eye eye-left" />
              <span className="dog-eye eye-right" />
              <span className="dog-blush blush-left" />
              <span className="dog-blush blush-right" />
              <span className="dog-nose" />
              <span className="dog-smile" />
            </div>
            <div className="dog-body">
              <span className="dog-paw paw-left" />
              <span className="dog-paw paw-right" />
            </div>
          </div>

          {/* Banheira e mensagem decorativa */}
          <div className="tub">
            <span className="tub-bubble">○　○　○</span>
            <span className="tub-label">banho de carinho</span>
          </div>

          <div className="floating-tag">♥ cuidado de verdade</div>
        </div>

        <span className="hero-decoration" aria-hidden="true">✳</span>
      </section>

      {/* Mensagem de boas-vindas */}
      <section className="welcome-strip">
        <span className="strip-icon">✿</span>
        <p>Um cantinho especial para cuidar de quem <strong>enche sua vida de alegria.</strong></p>
        <span className="strip-paw">🐾</span>
      </section>

      {/* Apresentação dos serviços na página inicial */}
      <section className="home-services">

        <div className="section-heading">
          <div>
            <span className="eyebrow">NOSSO JEITO DE CUIDAR</span>
            <h2>Um mimo para cada focinho</h2>
          </div>

          {/* Link para ver todos os serviços */}
          <Link className="text-link" to="/servicos">
            Ver todos os serviços <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Cards com os serviços oferecidos */}
        <div className="service-preview-grid">
          <article className="preview-card peach">
            <span>🛁</span>
            <div>
              <h3>Banho gostoso</h3>
              <p>Limpeza suave e cheirinho de abraço.</p>
            </div>
          </article>

          <article className="preview-card sage">
            <span>✂️</span>
            <div>
              <h3>Tosa com carinho</h3>
              <p>Um visual fresquinho no ritmo do seu pet.</p>
            </div>
          </article>

          <article className="preview-card lilac">
            <span>🐾</span>
            <div>
              <h3>Cuidado completo</h3>
              <p>Atenção especial em cada detalhe.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

// Exporta a página para ser utilizada nas rotas
export default Home;
