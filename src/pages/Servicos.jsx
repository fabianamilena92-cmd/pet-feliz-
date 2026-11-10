import { Link } from "react-router-dom";

const servicos = [
  { icon: "🛁", number: "01", title: "Banho gostoso", description: "Um banho tranquilo com produtos próprios para cada tipo de pelo. Seu pet sai limpinho, macio e com aquele cheirinho irresistível.", detail: "Produtos suaves · Secagem cuidadosa", tone: "peach" },
  { icon: "✂️", number: "02", title: "Tosa com carinho", description: "Corte feito com paciência e atenção ao estilo e ao conforto do seu melhor amigo.", detail: "Tosa higiênica · Tosa na tesoura", tone: "sage" },
  { icon: "🐾", number: "03", title: "Cuidado completo", description: "Um momento de atenção de ponta a ponta, com carinho, respeito e cuidado em cada etapa.", detail: "Escovação · Unhas · Ouvidos", tone: "lilac" },
];

function Servicos() {
  return (
    <div className="inner-page">
      <section className="page-intro"><span className="eyebrow">CARINHO EM CADA DETALHE</span><h1>Um cuidado feito <em>para ele.</em></h1><p>Pequenos mimos, grandes rabinhos abanando. Escolha o cuidado que combina com seu pet.</p></section>
      <section className="service-list" aria-label="Lista de serviços">
        {servicos.map((servico) => <article className={`service-card ${servico.tone}`} key={servico.number}><span className="service-number">{servico.number}</span><span className="service-icon">{servico.icon}</span><div className="service-info"><h2>{servico.title}</h2><p>{servico.description}</p><span className="service-detail">{servico.detail}</span></div><span className="service-sparkle" aria-hidden="true">✳</span></article>)}
      </section>
      <section className="booking-banner"><div><span className="eyebrow">ELE VAI AMAR</span><h2>Vamos marcar um momento especial?</h2><p>Vai ser um prazer receber vocês por aqui.</p></div><Link className="button button-primary" to="/contato">Agendar visita <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}

export default Servicos;
