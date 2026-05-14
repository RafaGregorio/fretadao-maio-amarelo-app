// src/data/perguntas.ts

export type Pergunta = {
  id: number;
  texto: string;
  alternativas: string[];
  correta: number; // índice da alternativa correta (0-3)
};

export const perguntas: Pergunta[] = [
  {
    id: 1,
    texto:
      "O Maio Amarelo é um movimento internacional de conscientização no trânsito. Por que a cor amarela foi escolhida como símbolo?",
    alternativas: [
      "Por ser a cor dos coletes de segurança",
      "Por representar o sinal de atenção do semáforo — um alerta para todos os condutores",
      "Por ser a cor mais visível à noite",
      "Por ser a cor das faixas de pedestres",
    ],
    correta: 1,
  },
  {
    id: 2,
    texto: "No Fretadão, por que a segurança é tratada como algo inegociável?",
    alternativas: [
      "Porque reduz os custos com combustível e manutenção",
      "Porque é uma exigência burocrática dos contratos com clientes",
      "Porque cada veículo transporta vidas — colaboradores reais com famílias que esperam por eles em casa",
      "Porque os seguros são mais baratos quando há menos acidentes",
    ],
    correta: 2,
  },
  {
    id: 3,
    texto:
      "Quais são os três pilares da direção defensiva que mais evitam acidentes?",
    alternativas: [
      "Conhecimento das leis, atenção constante e antecipação dos riscos",
      "Velocidade alta, buzina frequente e reflexos rápidos",
      "Carro novo, pneus caros e câmera de ré",
      "Habilidade técnica, pressa calculada e confiança no instinto",
    ],
    correta: 0,
  },
  {
    id: 4,
    texto:
      "Em quais períodos do dia ocorreram mais acidentes na frota Fretadão?",
    alternativas: [
      "Madrugada e manhã (00h–12h)",
      "Apenas de madrugada (00h–6h)",
      "Distribuídos igualmente ao longo do dia",
      "Tarde e noite (12h–00h)",
    ],
    correta: 3,
  },
  {
    id: 5,
    texto:
      "Dirigir com sono tem efeito similar a qual condição no organismo do motorista?",
    alternativas: [
      "Embriaguez alcoólica",
      "Pressão arterial elevada",
      "Febre moderada",
      "Ansiedade leve",
    ],
    correta: 0,
  },
  {
    id: 6,
    texto:
      "Quando o outro motorista é o culpado pelo acidente, o que um motorista profissional deve fazer?",
    alternativas: [
      "Aguardar o impacto — a culpa é do outro",
      "Antecipar o erro alheio e agir defensivamente para evitar o acidente",
      "Buzinar como alerta e manter a velocidade",
      "Parar o veículo abruptamente",
    ],
    correta: 1,
  },
  {
    id: 7,
    texto:
      "92% das ocorrências não resultaram em vítimas. O que esse dado revela sobre a segurança no trânsito?",
    alternativas: [
      "Que o trânsito está seguro e os riscos são exagerados",
      "Que a sorte colaborou, mas 28% tinham potencial médio ou alto — prevenção é o que garante isso de forma consistente",
      "Que acidentes sem vítimas não precisam de atenção",
      "Que os veículos de fretamento são muito seguros por natureza",
    ],
    correta: 1,
  },
  {
    id: 8,
    texto:
      "No fretamento corporativo, além do motorista, quem mais tem papel ativo na segurança viária?",
    alternativas: [
      "As empresas contratantes, ao exigir padrões de segurança, e os passageiro, ao respeitar as normas do veículo",
      "Apenas o motorista, que é o único responsável",
      "Somente as montadoras, pelo design dos veículos",
      "Apenas os órgãos de trânsito e fiscalização",
    ],
    correta: 0,
  },
];
