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
      <img src="/assets/img/logo/logo_square.png" alt="Logo Sebo Gama" className="logo-image" />
      <div className="logo-copy">
        <span className="logo-small">SEBO</span>
        <span className="logo-large">GAMA</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="card">
        <header className="hero">
          <Logo />
          <div className="hero-copy">
            <p className="eyebrow">Link tree do sebo</p>
            <h1>Sebo Gama</h1>
            <p className="lead">
              Navegue por contatos, redes e marketplaces do Sebo Gama em uma
              página acolhedora e com cara de sebo. Tudo pensado para quem ama
              livros usados, raridades e boas recomendações.
            </p>
          </div>
        </header>

        <section className="links-grid" aria-label="Links principais do Sebo Gama">
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

        <footer className="footer-note">
          <p>
            Feito para leitores, colecionadores e apreciadores de histórias bem
            guardadas.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
