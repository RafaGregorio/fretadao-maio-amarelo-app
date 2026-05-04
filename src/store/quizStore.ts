// src/store/quizStore.ts
// Armazenamento em memória — substituir por banco de dados depois

export type Participante = {
  nome: string;
  email: string;
  area: string;
  pontos: number;
  acertos: number;
  data: string;
};

// Simula persistência em memória durante a sessão
// Quando migrar para banco, só trocar as funções abaixo
let ranking: Participante[] = [
  { nome: "Ana Silva", email: "ana@email.com", area: "Motorista", pontos: 4500, acertos: 9, data: "2026-05-01" },
  { nome: "Carlos Mendes", email: "carlos@email.com", area: "Administrativo", pontos: 4000, acertos: 8, data: "2026-05-02" },
  { nome: "Bia Santos", email: "bia@email.com", area: "Técnico", pontos: 3500, acertos: 7, data: "2026-04-30" },
  { nome: "Rafael Lima", email: "rafael@email.com", area: "Comercial", pontos: 2500, acertos: 5, data: "2026-05-01" },
  { nome: "Mariana Costa", email: "mariana@email.com", area: "Motorista", pontos: 1500, acertos: 3, data: "2026-04-29" },
];

export function getRanking(): Participante[] {
  return [...ranking].sort((a, b) => b.pontos - a.pontos).slice(0, 5);
}

export function addParticipante(p: Participante) {
  ranking.push(p);
  ranking = ranking.sort((a, b) => b.pontos - a.pontos);
}
