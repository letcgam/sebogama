import { useEffect, useRef, useState } from "react";

const redesSociais = [
  {
    label: "WhatsApp",
    href: "https://wa.me/551932827379",
    logo: "whatsapp.png",
    description: "Enviar mensagem",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sebogama",
    logo: "instagram.png",
    description: "@sebogama",
  },
];

const fotosSeboHorizontais = [
  "h_DSC1452.jpg",
  "h_DSC1485.jpg",
  "h_DSC1490.jpg",
  "h_DSC1509.jpg",
  "h_DSC1517.jpg",
  "h_DSC1520.jpg",
  "h_DSC1525.jpg",
  "h_DSC1538.jpg",
  "h_DSC1660.jpg",
];

const fotosSeboVerticais = [
  "v_DSC1435.jpg",
  "v_DSC1444.jpg",
  "v_DSC1462.jpg",
  "v_DSC1522.jpg",
  "v_DSC1523.jpg",
  "v_DSC1524.jpg",
  "v_DSC1530.jpg",
  "v_DSC1536.jpg",
  "v_DSC1566.jpg",
  "v_DSC1584.jpg",
  "v_DSC1594.jpg",
  "v_DSC1620.jpg",
  "v_DSC1697.jpg",
  "v_DSC1714.jpg",
  "v_DSC1717.jpg",
  "v_DSC1480.jpg",
  "v_DSC1487.jpg",
  "v_DSC1488.jpg",
  "v_DSC1494.jpg",
  "v_DSC1500.jpg",
  "v_DSC1507.jpg",
  "v_DSC1518.jpg",
];

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

const palavrasSlide = [
  "Livro",
  "Gibi",
  "CD",
  "DVD",
  "Disco de vinil",
  "Action figure",
  "Mangá",
  "Álbum",
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledFotos] = useState(() => {
    const fotos = [...fotosSeboHorizontais];
    for (let i = fotos.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [fotos[i], fotos[j]] = [fotos[j], fotos[i]];
    }
    return fotos;
  });
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % shuffledFotos.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [shuffledFotos.length]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + shuffledFotos.length - 1) % shuffledFotos.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % shuffledFotos.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="carousel">
      <div
        className="carousel-frame"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={"/assets/img/fotos_loja/" + shuffledFotos[currentIndex]}
          alt={`Foto do Sebo Gama ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-caption">Fotos do sebo</div>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={prevSlide} className="carousel-button" aria-label="Foto anterior">
          &#8592;
        </button>
        <div className="carousel-indicator">
          {`${currentIndex + 1}/${shuffledFotos.length}`}
        </div>
        <button type="button" onClick={nextSlide} className="carousel-button" aria-label="Próxima foto">
          &#8594;
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="main-content">
      <header>
        <img
          src="/assets/img/logo/logo_square.png"
          alt="Logo oficial do Sebo Gama"
          id="header-logo"
        />
        <h1 id="header-title">
          <span className="text-emphasis">Sebo</span>Gama
        </h1>
        <small id="header-description">
          Tradição, Leitura & Cultura Pop desde 2002
        </small>
        <span className="tag tag-accent">
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
          Campinas, SP
        </span>
        <hr />
      </header>

      <div id="card-callout">
        <section className="card-body">
          <h3>Encontre aqui seu novo</h3>
          <div className="text-slider">
            {palavrasSlide.map((palavra, i) => <span className="roating-text" key={ i }>{ palavra }</span>)}
          </div>
          <h3>favorito.</h3>
        </section>
      </div>

      <section className="card-body" id="contatos">
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
                src={`/assets/img/tp_logos/${link.logo}`}
                alt={`Logotipo de ${link.label}`}
              />
              <div>
                <span className="link-label">{link.label}</span>
                <small className="link-description">{link.description}</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="card-header" style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "1em" }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm90-233 200-39v-478l-200 39v478Zm-80 16v-478l-15 3q-11 2-18 9.5t-7 18.5v457q5-2 10.5-3.5T261-293l19-4Zm-40-472v482-482Z"/></svg>
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
                src={`/assets/img/tp_logos/${link.logo}`}
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

      <div className="card">
        <div className="card-header" style={{ display: "flex" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor"><path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
          <h2>Onde estamos</h2>
        </div>
        <section className="card-body" id="section-mapa">
            <p id="endereco-copy">
              <h3 style={{ margin: 0 }}>
                <b style={{ fontFamily: 'DM Serif Display, serif' }}>Galeria Rocha</b>
              </h3>
              <b>R. Dom Humberto Mazzoni, 56 - Loja 12</b>
              <br />
              <small>Conj. Res. Padre Anchieta, Campinas - SP</small>
              <br />
              <small>CEP: 13068-323</small>
            </p>

            <table id="table-horario">
              <thead>
                <tr>
                  <th>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    <b>Horário de Atendimento</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda a Sexta</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>09:00 - 13:00</td>
                </tr>
              </tbody>
            </table>

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
        </section>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Sobre o Sebo Gama</h2>
        </div>
        <section className="card-body">
          <h3>Tradição, Leitura e Cultura Pop</h3>

          <p>Desde 2002 em Campinas, o Sebo Gama é o destino certo para leitores, garimpadores e colecionadores. Unimos o fascínio dos sebos tradicionais ao universo geek, oferecendo uma curadoria especial de itens seminovos e raridades.</p>

          <p><b>O que você encontra aqui:</b></p>

          <ul>
            <li><b>Leitura:</b> Livros usados de todos os gêneros.</li>
            <li><b>Quadrinhos:</b> Mangás, HQs e gibis clássicos.</li>
            <li><b>Mídias Físicas:</b> CDs, DVDs e discos de vinil para amantes da música e do cinema.</li>
            <li><b>Colecionáveis:</b> Action figures, brinquedos e itens de decoração retrô.</li>
          </ul>

          <p>Seja visitando nossa loja física em Campinas ou navegando no nosso site com entrega para todo o Brasil, nossa missão é conectar você a grandes histórias e memórias inesquecíveis.</p>

          <p><b>Garimpe nosso acervo e encontre seu próximo achado!</b></p>

          <ImageCarousel/>
        </section>
      </div>

      <footer className="footer-note">
        <p><b>sebo<span className="text-emphasis">gama</span></b></p>
        <hr />
        <p>
          Feito para leitores, colecionadores e apreciadores de histórias bem
          guardadas.
        </p>
        <p style={{ opacity: 0.5 }}><small>© 2026 Sebo Gama. Todos os direitos reservados.</small></p>
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
