const links = [
  {
    label: "WhatsApp",
    href: "https://wa.me/551932827379",
    description: "Converse direto com o Sebo Gama e peça indicações.",
    logo: "whatsApp.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sebogama",
    description: "Siga o sebo para novidades e cliques de livros.",
    logo: "instagram.jpeg",
  },
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
  {
    label: "Endereço",
    href: "https://maps.app.goo.gl/bUQE4MPMyXaajv2h8?g_st=ac",
    description: "R. Dom Humberto Mazzoni, 56 - Campinas, SP.",
    logo: "google_maps.jpeg",
  },
];

function Logo() {
  return (
    <div className="logo-block logo-official" aria-label="Logo oficial Sebo Gama">
      <img src="/assets/img/logo/icon.png" alt="Logo Sebo Gama" id="header-logo" />
      <div className="logo-copy">
        <span className="logo-small">sebo</span>
        <span className="logo-large">gama</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="main-content">
      <header className="header">
        <Logo />
      </header>

      <div className="card">
        Acervo de produtos culturais.
      </div>

      <div className="card">
        <section id="contatos">
          <h2>Contatos</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio dignissimos minus totam eveniet quod! Consectetur a ad et vero accusamus, repudiandae quis beatae in voluptates! Dolorum ipsa doloribus molestias.
        </section>
      </div>

      <div className="card">
        <section className="links-grid" aria-label="Links principais do Sebo Gama">
          <h2>Nosso acervo</h2>
          {links.map((link) => (
            <a key={link.label} href={link.href} className="link-card" target="_blank" rel="noreferrer noopener">
              <span className="link-logo" aria-hidden="true">
                <img className="logo-img" src={`public/assets/img/tp_logos/${link.logo}`} alt={`Logotipo de ${link.label}`}/>
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
        <section className="about-section">
          <div className="about-content">
            <h2>Sobre o Sebo Gama</h2>
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
        <img src="/assets/img/logo/icon.png" alt="Logo Sebo Gama" id="footer-logo" />
      </footer>
    </div>
  );
}

export default App;
