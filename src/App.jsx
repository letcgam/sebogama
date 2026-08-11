const redesSociais = [
  {
    label: "WhatsApp",
    href: "https://wa.me/551932827379",
    logo: "whatsapp.png",
    description: "Enviar mensagem",
    contato: "(19) 3282-7379",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sebogama",
    logo: "instagram.png",
    description: "Acessar perfil",
    contato: "@sebogama",
  },
]

const links = [
  {
    label: "Mercado Livre 1",
    href: "https://lista.mercadolivre.com.br/_CustId_10589566",
    description: "Vitrine oficial do Sebo Gama no Mercado Livre.",
    logo: "mercado_livre.jpeg",
  },
  {
    label: "Mercado Livre 2",
    href: "https://lista.mercadolivre.com.br/_CustId_87521371",
    description: "Segunda lista de ofertas e livros usados.",
    logo: "mercado_livre.jpeg",
  },
  {
    label: "Estante Virtual",
    href: "https://www.estantevirtual.com.br/sebos-e-livreiros/sebo-gama?sellerId=1001625",
    description: "Catálogo selecionado com raridades e títulos clássicos.",
    logo: "estante_virtual.jpeg",
  },
  {
    label: "Amazon",
    href: "https://www.amazon.com.br/s?me=APD19WSL51GVY&marketplaceID=A2Q3Y263D00KWC",
    description: "Loja Sebo Gama na Amazon Brasil.",
    logo: "amazon.png",
  },
  {
    label: "Shopee 1",
    href: "https://shopee.com.br/shop/1278434125",
    description: "Vitrine de livros usados e edições especiais.",
    logo: "shopee.jpeg",
  },
  {
    label: "Shopee 2",
    href: "https://shopee.com.br/shop/342101493",
    description: "Segunda loja com lançamentos e acervo selecionado.",
    logo: "shopee.jpeg",
  },
];

function App() {
  return (
    <div id="main-content">
      <header>
        <img
          src="/assets/img/logo/logo_square.png"
          alt="Logo oficial do Sebo Gama"
          id="header-logo"
        />
      </header>

      <div className="card">Acervo de produtos culturais.</div>

      <div className="card">
        <div className="card-header">
          <h2>Contatos</h2>
        </div>
        <section className="card-body " id="contatos">
          <div id="links-redes-sociais">
            {redesSociais.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-contato"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={`public/assets/img/tp_logos/${link.logo}`}
                  alt={`Logotipo de ${link.label}`}
                />
                <div>
                  <span className="link-label">{link.contato}</span>
                  <span className="link-description">{link.description}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Nosso acervo</h2>
        </div>
        <section
          className="card-body links-grid"
          aria-label="Links principais do Sebo Gama"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-card"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="link-logo" aria-hidden="true">
                <img
                  className="logo-img"
                  src={`public/assets/img/tp_logos/${link.logo}`}
                  alt={`Logotipo de ${link.label}`}
                />
              </span>
              <div>
                <span className="link-label">{link.label}</span>
                <span className="link-description">{link.description}</span>
              </div>
            </a>
          ))}
        </section>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Onde estamos</h2>
        </div>
        <section className="card-body" id="section-mapa">
          <a href="https://maps.app.goo.gl/qb3YcpBvqprnsgnr7" target="_blank">
            <p id="endereco-copy">
              <b>R. Dom Humberto Mazzoni, 56 - Lj 12</b>
              <br />
              Conj. Res. Padre Anchieta, Campinas - SP, 13068-323
            </p>

            <div id="mapa-overlay"></div>
            <iframe
              title="Mapa para Sebo Gama"
              id="iframe_mapa_endereco"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58821.63075826349!2d-47.166788418212874!3d-22.86345466914875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b8942470f42d%3A0xc97df910437004fa!2sSebo%20Gama%20Livros!5e0!3m2!1spt-BR!2sbr!4v1786464046896!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              aria-hidden="true"
              tabindex="-1"
            ></iframe>
          </a>
        </section>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Sobre o Sebo Gama</h2>
        </div>
        <section className="card-body">
          <div>
            <p>
              Sebo Gama une o velho e o novo em Campinas: uma vitrine digital
              com o aconchego de um sebo, atendimento direto e ofertas em
              diversas plataformas.
            </p>
            <p>
              Use esta página para acessar rapidamente os canais oficiais e
              encontrar os melhores livros usados e edições especiais com o
              carisma de um sebo de verdade.
            </p>
          </div>
        </section>
      </div>

      <footer className="footer-note">
        <p>
          Feito para leitores, colecionadores e apreciadores de histórias bem
          guardadas.
        </p>
        <img
          src="/assets/img/logo/icon.png"
          alt="Logo Sebo Gama"
          id="footer-logo"
        />
      </footer>
    </div>
  );
}

export default App;
