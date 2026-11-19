/** Crédito público do projeto de portfólio. */
export const projectAuthor = {
  name: "Enzo Ribas",
  profileUrl: "https://github.com/oEnzoRibas",
};

/** Links compartilhados entre cabeçalho e rodapé. */
export const navigation = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Dúvidas", href: "#duvidas" },
];

/** Tratamentos e identificadores usados para montar a mensagem de interesse. */
export const treatments = [
  { name: "Ortodontia", icon: "alignment", description: "Planejamento para alinhar os dentes e cuidar da mordida, com opções pensadas para a sua rotina." },
  { name: "Clareamento", icon: "sparkles", description: "Um plano para iluminar o sorriso, considerando a cor natural dos dentes e a sensibilidade." },
  { name: "Implantes", icon: "layers", description: "Soluções para repor dentes e recuperar a função mastigatória, a partir de uma avaliação individual." },
  { name: "Estética dental", icon: "smile", description: "Cuidado com proporções, formas e detalhes para valorizar a expressão natural do seu sorriso." },
] as const;

/** Etapas da experiência na ordem em que são apresentadas. */
export const journey = [
  { title: "Agendamento", text: "Conte o que você procura e escolha um horário que caiba na sua rotina." },
  { title: "Avaliação", text: "Conversamos sobre suas expectativas e avaliamos sua saúde bucal." },
  { title: "Tratamento", text: "Depois de decidir juntos, conduzimos o plano no ritmo combinado." },
  { title: "Acompanhamento", text: "Revisamos a evolução e orientamos os próximos cuidados." },
];

/** Profissionais fictícios e retratos gerados para a demonstração. */
export const team = [
  { name: "Helena Duarte", area: "Estética dental", image: "/images/helena.webp" },
  { name: "Rafael Nogueira", area: "Implantes", image: "/images/rafael.webp" },
  { name: "Luiza Campos", area: "Ortodontia", image: "/images/luiza.webp" },
];

/** Relatos fictícios para demonstrar o carrossel manual. */
export const testimonials = [
  { quote: "Cheguei com muitas dúvidas. Poder conversar com calma antes de decidir fez toda a diferença.", name: "Marina A.", context: "Primeira avaliação" },
  { quote: "Entender o que aconteceria em cada etapa me deixou muito mais tranquila para começar.", name: "Bianca R.", context: "Jornada ortodôntica" },
  { quote: "Gostei de participar das decisões e de ter espaço para falar sobre o resultado que eu esperava.", name: "André M.", context: "Estética dental" },
];

/** Perguntas sobre a experiência proposta e o modo demonstração. */
export const faq = [
  { question: "Como é a primeira consulta?", answer: "A consulta começa com uma conversa sobre seus objetivos e seu histórico. Depois da avaliação, você recebe uma explicação sobre as opções e os próximos passos." },
  { question: "Preciso saber qual tratamento quero agendar?", answer: "Você pode começar pela avaliação. A conversa ajuda a entender suas prioridades e a decidir quais opções faz sentido discutir." },
  { question: "Posso conversar sobre alinhadores na avaliação?", answer: "Sim. Você pode levar suas dúvidas sobre alinhadores e outros aparelhos. A avaliação é o momento de discutir indicação, adaptação e cuidados." },
  { question: "Quando recebo uma estimativa de valores?", answer: "A estimativa é apresentada após a avaliação, junto com as etapas previstas no plano. Assim você pode decidir com as informações em mãos." },
  { question: "Este site aceita agendamentos reais?", answer: "A Aurora é uma clínica fictícia criada para portfólio. O formulário demonstra o fluxo de contato e pode ser conectado a uma caixa de atendimento em uma instalação configurada." },
];
