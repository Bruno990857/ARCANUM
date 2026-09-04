export type MasterId = "vulkar" | "neris" | "avatis" | "erdan";

export interface Master {
  id: MasterId;
  name: string;
  element: string;
  principle: string;
  emoji: string;
  title: string;
  essence: string;
  image: string;
  belief: string;
  taught: string[];
  danger: string;
  today: string;
  colors: {
    text: string;
    bg: string;
    border: string;
    ring: string;
    glow: string;
    gradient: string;
    badge: string;
  };
}

export const masters: Master[] = [
  {
    id: "vulkar",
    name: "Vulkar",
    element: "Fogo",
    principle: "Força",
    emoji: "🔥",
    title: "Aquele que avançava",
    essence: "Essência da Força",
    image: "/images/vulkar.jpg",
    belief:
      "Vulkar acreditava que nada poderia existir sem força para protegê-lo. Para ele, fraqueza significava vulnerabilidade.",
    taught: ["Lutar", "Resistir", "Enfrentar o impossível"],
    danger:
      "Força sem controle pode destruir aquilo que deveria proteger.",
    today:
      "Continua sendo o símbolo da Força, mas carrega o peso de saber que sua própria força quase destruiu o mundo. Acredita que Arcanum precisa estar preparado para a próxima ameaça — mesmo que isso signifique tomar decisões difíceis.",
    colors: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/40",
      ring: "ring-orange-500",
      glow: "shadow-orange-500/30",
      gradient: "from-orange-600 via-red-600 to-amber-500",
      badge: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    },
  },
  {
    id: "neris",
    name: "Neris",
    element: "Água",
    principle: "Conhecimento",
    emoji: "🌊",
    title: "Aquela que compreendia",
    essence: "Essência do Conhecimento",
    image: "/images/neris.jpg",
    belief:
      "Enquanto os outros construíam, ela perguntava. Por que o mundo existia? O que havia antes dele? O que existia além dele? Para Neris, ignorância era o verdadeiro inimigo.",
    taught: ["Estudar as estrelas", "Ler os mares", "Registrar a magia"],
    danger:
      "Quanto mais ela descobria, mais percebia que existiam coisas que talvez jamais deveriam ser conhecidas.",
    today:
      "Continua buscando respostas. Descobriu que ainda existem partes da história dos Mestres que foram apagadas — e talvez seja a única capaz de descobrir o que realmente existia antes de Arcanum.",
    colors: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/40",
      ring: "ring-cyan-500",
      glow: "shadow-cyan-500/30",
      gradient: "from-cyan-600 via-blue-600 to-indigo-500",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    },
  },
  {
    id: "avatis",
    name: "Avatis",
    element: "Ar",
    principle: "Liberdade",
    emoji: "🌪️",
    title: "Aquele que jamais permanecia",
    essence: "Essência da Liberdade",
    image: "/images/avatis.jpg",
    belief:
      "Avatis nunca quis governar ninguém. Ensinava que nenhum ser deveria nascer pertencendo a outro. Para ele, liberdade era mais importante que segurança.",
    taught: ["Viajar", "Explorar", "Questionar reis"],
    danger:
      "Vulkar acreditava em proteger. Avatis acreditava que ninguém deveria precisar de um protetor.",
    today:
      "Continua recusando qualquer tentativa de controlar os povos, mas começa a perceber que liberdade sem direção pode novamente levar ao caos. Terá que decidir até onde está disposto a ir para defender aquilo em que acredita.",
    colors: {
      text: "text-sky-300",
      bg: "bg-sky-400/10",
      border: "border-sky-400/40",
      ring: "ring-sky-400",
      glow: "shadow-sky-400/30",
      gradient: "from-sky-400 via-slate-300 to-violet-400",
      badge: "bg-sky-400/20 text-sky-200 border-sky-400/40",
    },
  },
  {
    id: "erdan",
    name: "Erdan",
    element: "Terra",
    principle: "Equilíbrio",
    emoji: "🌱",
    title: "Aquele que sustentava",
    essence: "Essência do Equilíbrio",
    image: "/images/erdan.jpg",
    belief:
      "Erdan observava os outros três. Compreendia que todos estavam certos — e justamente por isso, todos poderiam estar errados. Nada deve existir acima do equilíbrio.",
    taught: ["Sustentar", "Mediar", "Impedir que um domine os demais"],
    danger:
      "Força sem conhecimento destrói. Conhecimento sem limites corrompe. Liberdade sem responsabilidade causa caos. Estabilidade sem mudança cria estagnação.",
    today:
      "Continua tentando manter o equilíbrio, mas o equilíbrio de Arcanum está desaparecendo. Pela primeira vez em milhares de anos, Erdan teme que talvez não seja possível salvar todos os lados.",
    colors: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/40",
      ring: "ring-emerald-500",
      glow: "shadow-emerald-500/30",
      gradient: "from-emerald-600 via-green-600 to-lime-500",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    },
  },
];

export const masterById = (id: MasterId) => masters.find((m) => m.id === id)!;
