import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const styles = `
    :root {
      --bg-dark: #0f172a;
      --bg-card: #1e293b;
      --primary-accent: #06b6d4; /* Ciano */
      --secondary-accent: #3b82f6; /* Azul Royal */
      --text-light: #f8fafc;
      --text-gray: #cbd5e1;
      --font-family: 'Poppins', sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-family);
      background-color: var(--bg-dark);
      color: var(--text-light);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Section Styling (The "Hero" Concept) */
    .hero-section {
      min-height: 90vh; /* Cada seção ocupa quase toda a tela */
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      position: relative;
    }

    .hero-section:nth-child(even) {
      background-color: #131c31; /* Leve alternância de cor */
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;
    }

    /* Typography */
    h2 {
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1.2;
      background: linear-gradient(90deg, #fff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      color: var(--text-gray);
      max-width: 700px;
      margin: 0 auto;
    }

    strong {
      color: var(--primary-accent);
    }

    /* Image Placeholder */
    .img-placeholder {
      width: 100%;
      max-width: 700px;
      height: 350px;
      background-color: rgba(0, 0, 0, 0.3);
      border: 2px dashed rgba(6, 182, 212, 0.3);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--text-gray);
      margin-bottom: 1.5rem;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    }

    .img-label {
      background: rgba(0,0,0,0.6);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-family: monospace;
      color: var(--primary-accent);
    }

    /* Offer Box & CTA */
    .offer-container {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(6, 182, 212, 0.2);
      padding: 2rem;
      border-radius: 16px;
      width: 100%;
      max-width: 500px;
      margin-top: 1rem;
      backdrop-filter: blur(5px);
    }

    .price-tag {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-accent);
      margin-bottom: 0.5rem;
      text-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
    }

    .price-sub {
      display: block;
      font-size: 0.9rem;
      color: #94a3b8;
      margin-bottom: 1.5rem;
    }

    .cta-button {
      display: block;
      width: 100%;
      background: linear-gradient(90deg, var(--primary-accent), #3b82f6);
      color: white;
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.4);
      filter: brightness(1.1);
    }

    /* Steps/Numbering */
    .step-number {
      font-size: 4rem;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.03);
      position: absolute;
      top: 2rem;
      left: 2rem;
      z-index: 0;
      line-height: 1;
    }

    @media (max-width: 768px) {
      h2 { font-size: 1.75rem; }
      .hero-section { padding: 3rem 0; min-height: auto; }
      .img-placeholder { height: 250px; }
    }
  `;

  // Dados das 10 Seções (Heroes) com textos mais persuasivos
  const sections = [
    {
      id: 1,
      imageName: "hero-principal.png",
      title: "Crie Apps e Sites com IA e Gere Renda Extra",
      text: "O método simples para transformar seu tempo livre em uma nova fonte de renda, usando ferramentas gratuitas, mesmo começando do zero. Pare de apenas consumir tecnologia e comece a lucrar com ela hoje mesmo.",
      cta: "QUERO DESCOBRIR COMO",
      funnelStage: "Atenção"
    },
    {
      id: 2,
      imageName: "sem-programacao.png",
      title: "Esqueça Códigos Complicados",
      text: "Você não precisa ser um programador. A Inteligência Artificial faz o trabalho pesado; você só precisa saber dar o comando certo. É o fim da barreira técnica que te impedia de criar.",
      cta: "QUERO COMEÇAR AGORA",
      funnelStage: "Interesse"
    },
    {
      id: 3,
      imageName: "oportunidade-mercado.png",
      title: "O Mercado Precisa de Você",
      text: "Milhares de empresas precisam de sites e apps simples hoje. Poucas pessoas sabem entregar isso rápido e barato usando IA. O que vou te ensinar neste treinamento vai ter colocar na frente de muitas pessoas.",
      cta: "QUERO APROVEITAR A OPORTUNIDADE",
      funnelStage: "Interesse"
    },
    {
      id: 4,
      imageName: "metodo-codigo.png",
      title: "O Código do Novo Digital",
      text: "Meu método exclusivo onde descodifico as possibilidades digitais e traduzo tudo de forma clara, objetiva e prática para você. Não é teoria, é um mapa validado para o seu sucesso.",
      cta: "QUERO CONHECER O MÉTODO",
      funnelStage: "Desejo"
    },
    {
      id: 5,
      imageName: "o-que-aprende.png",
      title: "O Que Você Vai Dominar",
      text: "Desde criar sites profissionais com animação até construir aplicativos inteligentes. Adquira habilidades que valem ouro e que ninguém pode tirar de você.",
      cta: "QUERO APRENDER TUDO ISSO",
      funnelStage: "Desejo"
    },
    {
      id: 6,
      imageName: "diferenciais.png",
      title: "Por Que Esse Treinamento é Único",
      text: "O que vou apresentar vai mudar seu jogo no mundo digital. Não vou fingir que vou te ensinar para te empurrar outro curso mais caro. Sou direta, prática e vou te mostrar o caminho completo, do zero ao avançado",
      cta: "QUERO ESSE DIFERENCIAL",
      funnelStage: "Convicção"
    },
    {
      id: 7,
      imageName: "detalhes-evento.png",
      title: "Treinamento Ao Vivo: 29 de Novembro",
      text: "Sábado às 14h. Formato online, ao vivo, com demonstrações práticas e acesso  à gravação (Replay). Reserve este dia para descodificar sua vida no Marketing Ditial.",
      cta: "VOU ESTAR LÁ",
      funnelStage: "Compromisso"
    },
    {
      id: 8,
      imageName: "bonus-venda.png",
      title: "Bônus Exclusivo",
      text: "Receba o 'Guia Prático': o passo a passo de como vender infoprodutos na Kiwify. Você vai aprender a transformar suas criações em uma máquina de vendas.",
      cta: "QUERO GARANTIR MEU BÔNUS",
      funnelStage: "Incentivo"
    },
    {
      id: 9,
      imageName: "adriele-bio.jpg",
      title: "Com Adriele Almeida",
      text: "Estrategista Digital com mais de 20 anos de experiência. Minha missão é te ensinar a transformar conhecimento em resultado real. Aprenda com quem começou do absoluto ZERO e hoje esta descodificando O Código do Novo Digital pra você! Estrategista com prática de mercado e vive o campo de batalha digital diariamente.",
      cta: "QUERO APRENDER COM A ADRIELE",
      funnelStage: "Autoridade"
    },
    {
      id: 10,
      imageName: "garantia-final.png",
      title: "Sua Chance é Agora",
      text: "Não deixe para depois. Vagas limitadas.",
      cta: "COMPRAR AGORA - ACESSO IMEDIATO",
      funnelStage: "Ação Final"
    }
  ];

  return (
    <div>
      <style>{styles}</style>
      
      {sections.map((section, index) => (
        <section key={section.id} className="hero-section">
          <div className="step-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
          <div className="container hero-content">
            
            {/* 1. Imagem no Topo */}
            <div className="img-placeholder">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🖼️</div>
              <div className="img-label">{section.imageName}</div>
              <small style={{marginTop: '0.5rem', opacity: 0.7}}>Sugestão: 700x350px</small>
            </div>

            {/* 2. Conteúdo do Hero */}
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>

            {/* 3. Valor e CTA */}
            <div className="offer-container">
              <span className="price-tag">12x de R$ 15,50</span>
              <span className="price-sub">ou R$ 149,90 no Pix</span>
              
              <a 
                href="https://pay.kiwify.com.br/JamocOx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button"
              >
                {section.cta}
              </a>
            </div>

          </div>
        </section>
      ))}

      <footer style={{padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#0f172a'}}>
        <p style={{color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          © 2025 ALMEIDA SOLUCOES ESTRATEGICAS DIGITAIS LTDA.
        </p>
        <p style={{color: '#64748b', fontSize: '0.8rem'}}>
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
