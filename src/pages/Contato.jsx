// Função responsável pela página de contato
function Contato() {
  return (
    <div className="inner-page contact-page">

      {/* Apresentação da página */}
      <section className="page-intro">
        <span className="eyebrow">PORTAS ABERTAS, PETS BEM-VINDOS</span>
        <h1>Vamos nos <em>conhecer?</em></h1>
        <p>Fale com a gente e encontre o melhor horário para o seu companheiro.</p>
      </section>

      {/* Área que contém as informações de contato */}
      <section className="contact-layout">

        {/* Card principal com uma mensagem */}
        <div className="contact-card contact-main">
          <span className="contact-icon">💌</span>
          <span className="eyebrow">A GENTE ADORA RECEBER UM OI</span>
          <h2>Seu pet já está<br />na nossa lista VIP.</h2>
          <p>Chame a gente para tirar dúvidas ou combinar uma visita. Vamos cuidar de tudo com carinho.</p>

          {/* Botão que permite ligar para a loja */}
          <a className="button button-light" href="tel:+5546999999999">
            Ligar: (46) 99999-9999 <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Informações de telefone, e-mail e horário */}
        <div className="contact-details">

          {/* Informações do telefone e WhatsApp */}
          <article className="detail-card">
            <span className="detail-icon">📞</span>
            <div>
              <span className="detail-label">TELEFONE</span>
              <a href="tel:+5546999999999">(46) 99999-9999</a>
              <small>Também atendemos por WhatsApp</small>
            </div>
          </article>

          {/* Informações do e-mail */}
          <article className="detail-card">
            <span className="detail-icon">✉️</span>
            <div>
              <span className="detail-label">E-MAIL</span>
              <a href="mailto:petfeliz@email.com">petfeliz@email.com</a>
              <small>Respondemos com todo carinho</small>
            </div>
          </article>

          {/* Dias e horários de funcionamento */}
          <article className="detail-card">
            <span className="detail-icon">🕒</span>
            <div>
              <span className="detail-label">HORÁRIOS</span>
              <strong>Segunda a sábado</strong>
              <small>Das 9h às 18h</small>
            </div>
          </article>
        </div>
      </section>

      {/* Mensagem que aparece no final da página */}
      <p className="contact-signoff">
        Estamos esperando por você e seu amiguinho. <span>🐶</span>
      </p>
    </div>
  );
}

// Exporta a função para ser usada em outras partes do projeto
export default Contato;