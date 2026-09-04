import type { MasterId } from "./masters";

export type ItemKind =
  | "Armadura"
  | "Arma"
  | "Artefato"
  | "Magia"
  | "Material"
  | "Montaria"
  | "Utilidade"
  | "Exclusivo";

export interface RewardItem {
  name: string;
  mod: string;
  kind: ItemKind;
  qty?: string;
  note?: string;
}

export interface RewardTier {
  tier: 1 | 2 | 3 | 4;
  tierName: string;
  title: string;
  requirement: string;
  location: string;
  items: RewardItem[];
}

export interface MasterRewards {
  master: MasterId | "pacto";
  tiers: RewardTier[];
}

export const tierLabels: Record<number, string> = {
  1: "Iniciado",
  2: "Adepto",
  3: "Guardião",
  4: "Mestre",
};

export const rewards: MasterRewards[] = [
  // ─────────────────────────── VULKAR ───────────────────────────
  {
    master: "vulkar",
    tiers: [
      {
        tier: 1,
        tierName: "Iniciado da Chama",
        title: "A Primeira Faísca",
        requirement:
          "Crie o Livro de Feitiços de Bastão de Blaze e aprenda seu primeiro feitiço de Fogo.",
        location: "Fortaleza do Nether",
        items: [
          { name: "Blaze Rod Spell Book", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
          { name: "Pergaminho: Fire Bolt", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
          { name: "Pergaminho: Burning Dash", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
          { name: "Flame Pendant", mod: "Artifacts", kind: "Artefato", note: "Incendeia quem te atacar" },
          { name: "Fiery Ingot", mod: "Twilight Forest", kind: "Material", qty: "×6" },
          { name: "Glifo: Ignite", mod: "Ars Nouveau", kind: "Magia" },
        ],
      },
      {
        tier: 2,
        tierName: "Adepto da Forja",
        title: "Aço que Não Cede",
        requirement:
          "Derrote o Ferrous Wroughtnaut e a Hydra. Prove que a força se conquista de frente.",
        location: "Caverna do Wroughtnaut / Covil da Hydra (Twilight Forest)",
        items: [
          { name: "Pyromancer Armor", mod: "Iron's Spells 'n Spellbooks", kind: "Armadura", qty: "Set completo" },
          { name: "Wrought Helm", mod: "Mowzie's Mobs", kind: "Armadura" },
          { name: "Axe of a Thousand Metals", mod: "Mowzie's Mobs", kind: "Arma" },
          { name: "Fiery Sword", mod: "Twilight Forest", kind: "Arma" },
          { name: "Power Glove", mod: "Artifacts", kind: "Artefato", note: "+ dano corpo a corpo" },
          { name: "Flaming Sword", mod: "The Aether", kind: "Arma" },
        ],
      },
      {
        tier: 3,
        tierName: "Guardião da Fornalha",
        title: "O Coração do Metal",
        requirement:
          "Derrote a Netherite Monstrosity na Soul Blacksmith e dome (ou mate) um Dragão de Fogo adulto.",
        location: "Soul Blacksmith (Nether) / Covil de Dragão de Fogo",
        items: [
          { name: "Infernal Forge", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Martelo + picareta" },
          { name: "Monstrous Helm", mod: "L_Ender's Cataclysm", kind: "Armadura" },
          { name: "Fire Dragon Scale Armor", mod: "Ice and Fire", kind: "Armadura", qty: "Set completo" },
          { name: "Flamed Dragonbone Sword", mod: "Ice and Fire", kind: "Arma" },
          { name: "Rod of the Hells", mod: "Botania", kind: "Magia" },
          { name: "Obsidian Skull", mod: "Artifacts", kind: "Artefato", note: "Resistência ao fogo" },
        ],
      },
      {
        tier: 4,
        tierName: "Mestre da Força",
        title: "O Julgamento de Ignis",
        requirement:
          "Derrote Ignis na Burning Arena. Somente quem sobrevive à sua chama recebe a Essência.",
        location: "Burning Arena (Nether)",
        items: [
          { name: "Ignitium Armor", mod: "L_Ender's Cataclysm", kind: "Armadura", qty: "Set completo", note: "Inquebrável" },
          { name: "Incinerator", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Espadão de Ignis" },
          { name: "Bulwark of Flame", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Escudo" },
          { name: "Sol Visage", mod: "Mowzie's Mobs", kind: "Armadura", note: "Invoca Umvuthana aliados" },
          { name: "Fire Dragonsteel Sword", mod: "Ice and Fire", kind: "Arma" },
          { name: "Essência da Força", mod: "Arcanum", kind: "Exclusivo", note: "1 de 4 partes do Arcano" },
        ],
      },
    ],
  },

  // ─────────────────────────── NERIS ───────────────────────────
  {
    master: "neris",
    tiers: [
      {
        tier: 1,
        tierName: "Iniciado das Marés",
        title: "A Primeira Pergunta",
        requirement:
          "Crie o Novice Spell Book, aprenda 5 glifos e escreva seu primeiro registro no Enchanting Apparatus.",
        location: "Qualquer Monumento Oceânico ou biblioteca",
        items: [
          { name: "Novice Spell Book", mod: "Ars Nouveau", kind: "Magia" },
          { name: "Glifos: Conjure Water, Freeze, Cold Snap", mod: "Ars Nouveau", kind: "Magia" },
          { name: "Pergaminho: Icicle", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
          { name: "Snorkel", mod: "Artifacts", kind: "Artefato" },
          { name: "Flippers", mod: "Artifacts", kind: "Artefato" },
          { name: "Neptunium Ingot", mod: "Aquaculture", kind: "Material", qty: "×6" },
        ],
      },
      {
        tier: 2,
        tierName: "Adepto do Abismo",
        title: "Registros Submersos",
        requirement:
          "Alcance o Otherside através de um Ancient Portal e retorne com uma Reinforced Echo Shard.",
        location: "Ancient City → Otherside (Deeper and Darker)",
        items: [
          { name: "Cryomancer Armor", mod: "Iron's Spells 'n Spellbooks", kind: "Armadura", qty: "Set completo" },
          { name: "Apprentice Spell Book", mod: "Ars Nouveau", kind: "Magia" },
          { name: "Neptunium Armor", mod: "Aquaculture", kind: "Armadura", qty: "Set completo" },
          { name: "Ring of Chordata", mod: "Botania", kind: "Artefato", note: "Respirar embaixo d'água" },
          { name: "Aqua-Dashers", mod: "Artifacts", kind: "Artefato", note: "Corre sobre a água" },
          { name: "Amulet of Mana Regen", mod: "Ars Nouveau", kind: "Artefato" },
        ],
      },
      {
        tier: 3,
        tierName: "Guardião do Conhecimento",
        title: "A Fábrica Esquecida",
        requirement:
          "Derrote o Harbinger na Ancient Factory e um Sea Serpent. Decifre a tecnologia que os antigos deixaram.",
        location: "Ancient Factory / Oceano profundo",
        items: [
          { name: "Archmage Spell Book", mod: "Ars Nouveau", kind: "Magia" },
          { name: "Warden Armor", mod: "Deeper and Darker", kind: "Armadura", qty: "Set completo" },
          { name: "Tide Guardian Armor", mod: "Ice and Fire", kind: "Armadura", qty: "Set completo" },
          { name: "Witherite Ingot", mod: "L_Ender's Cataclysm", kind: "Material", qty: "×8", note: "Para a Mechanical Fusion Anvil" },
          { name: "Rod of the Seas", mod: "Botania", kind: "Magia" },
          { name: "Crystal Heart", mod: "Artifacts", kind: "Artefato", note: "+10 de vida" },
        ],
      },
      {
        tier: 4,
        tierName: "Mestre do Conhecimento",
        title: "O Segredo do Leviathan",
        requirement:
          "Derrote o Leviathan na Sunken City. Nas profundezas está a verdade sobre o que existia antes.",
        location: "Sunken City (Oceano)",
        items: [
          { name: "Tidal Claws", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Gancho + arma" },
          { name: "Abyssal Sacrifice", mod: "L_Ender's Cataclysm", kind: "Arma" },
          { name: "Abyssal Egg", mod: "L_Ender's Cataclysm", kind: "Montaria", note: "Modern Leviathan" },
          { name: "Iced Dragonbone Sword", mod: "Ice and Fire", kind: "Arma" },
          { name: "Sonorous Staff", mod: "Deeper and Darker", kind: "Magia" },
          { name: "Essência do Conhecimento", mod: "Arcanum", kind: "Exclusivo", note: "1 de 4 partes do Arcano" },
        ],
      },
    ],
  },

  // ─────────────────────────── AVATIS ───────────────────────────
  {
    master: "avatis",
    tiers: [
      {
        tier: 1,
        tierName: "Iniciado dos Ventos",
        title: "O Primeiro Voo",
        requirement:
          "Abra um portal para o Aether e ative 3 Waystones em continentes diferentes.",
        location: "The Aether",
        items: [
          { name: "Zanite Armor", mod: "The Aether", kind: "Armadura", qty: "Set completo" },
          { name: "Cloud Parachute", mod: "The Aether", kind: "Utilidade" },
          { name: "Cloud in a Bottle", mod: "Artifacts", kind: "Artefato", note: "Pulo duplo" },
          { name: "Warp Stone", mod: "Waystones", kind: "Utilidade" },
          { name: "Glifos: Leap, Slowfall, Wind Shear", mod: "Ars Nouveau", kind: "Magia" },
          { name: "Pergaminho: Gust", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
        ],
      },
      {
        tier: 2,
        tierName: "Adepto do Céu",
        title: "Sem Correntes",
        requirement:
          "Derrote o Slider (Bronze Dungeon) e a Valkyrie Queen (Silver Dungeon) no Aether.",
        location: "Bronze Dungeon / Silver Dungeon (Aether)",
        items: [
          { name: "Valkyrie Armor", mod: "The Aether", kind: "Armadura", qty: "Set completo" },
          { name: "Valkyrie Lance", mod: "The Aether", kind: "Arma" },
          { name: "Electromancer Armor", mod: "Iron's Spells 'n Spellbooks", kind: "Armadura", qty: "Set completo" },
          { name: "Belt of Levitation", mod: "Ars Nouveau", kind: "Artefato" },
          { name: "Bunny Hoppers", mod: "Artifacts", kind: "Artefato" },
          { name: "Running Shoes", mod: "Artifacts", kind: "Artefato" },
        ],
      },
      {
        tier: 3,
        tierName: "Guardião da Tempestade",
        title: "Olho do Furacão",
        requirement:
          "Derrote Scylla na Acropolis e o Sun Spirit na Gold Dungeon. Dome um Dragão de Raio.",
        location: "Acropolis (céu) / Gold Dungeon (Aether)",
        items: [
          { name: "Phoenix Armor", mod: "The Aether", kind: "Armadura", qty: "Set completo" },
          { name: "Cloud Staff", mod: "The Aether", kind: "Arma" },
          { name: "Essence of the Storm", mod: "L_Ender's Cataclysm", kind: "Material", qty: "×4", note: "Crafta Astrape e Ceraunus" },
          { name: "Lightning Dragon Scale Armor", mod: "Ice and Fire", kind: "Armadura", qty: "Set completo" },
          { name: "Flügel Tiara", mod: "Botania", kind: "Artefato", note: "Voo criativo com mana" },
          { name: "Helium Flamingo", mod: "Artifacts", kind: "Artefato" },
        ],
      },
      {
        tier: 4,
        tierName: "Mestre da Liberdade",
        title: "Além da Cidadela",
        requirement:
          "Derrote o Ender Guardian na Ruined Citadel. Nenhum muro deve permanecer entre você e o céu.",
        location: "Ruined Citadel (The End)",
        items: [
          { name: "Gauntlet of Guard", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Puxa inimigos" },
          { name: "Ceraunus", mod: "L_Ender's Cataclysm", kind: "Arma", note: "Tridente da tempestade" },
          { name: "Astrape", mod: "L_Ender's Cataclysm", kind: "Arma" },
          { name: "Lightning Dragonsteel Sword", mod: "Ice and Fire", kind: "Arma" },
          { name: "Rod of the Skies", mod: "Botania", kind: "Magia" },
          { name: "Essência da Liberdade", mod: "Arcanum", kind: "Exclusivo", note: "1 de 4 partes do Arcano" },
        ],
      },
    ],
  },

  // ─────────────────────────── ERDAN ───────────────────────────
  {
    master: "erdan",
    tiers: [
      {
        tier: 1,
        tierName: "Iniciado das Raízes",
        title: "O Que Sustenta",
        requirement:
          "Crie uma Pure Daisy, uma Mana Pool e sua primeira máquina de Andesite Alloy.",
        location: "Qualquer floresta",
        items: [
          { name: "Manasteel Armor", mod: "Botania", kind: "Armadura", qty: "Set completo" },
          { name: "Mana Tablet", mod: "Botania", kind: "Artefato" },
          { name: "Andesite Alloy", mod: "Create", kind: "Material", qty: "×32" },
          { name: "Extendo Grip", mod: "Create", kind: "Utilidade" },
          { name: "Digging Claws", mod: "Artifacts", kind: "Artefato" },
          { name: "Glifos: Grow, Harvest, Fell", mod: "Ars Nouveau", kind: "Magia" },
        ],
      },
      {
        tier: 2,
        tierName: "Adepto da Pedra",
        title: "Fortaleza Viva",
        requirement:
          "Derrote a Naga e o Lich na Twilight Forest e conquiste uma Goblin Knight Stronghold.",
        location: "Twilight Forest",
        items: [
          { name: "Knightmetal Armor", mod: "Twilight Forest", kind: "Armadura", qty: "Set completo" },
          { name: "Plagued Armor", mod: "Iron's Spells 'n Spellbooks", kind: "Armadura", qty: "Set completo", note: "Escola da Natureza" },
          { name: "Elementium Armor", mod: "Botania", kind: "Armadura", qty: "Set completo" },
          { name: "Terra Shatterer", mod: "Botania", kind: "Arma" },
          { name: "Precision Mechanism", mod: "Create", kind: "Material", qty: "×8" },
          { name: "Steadfast Spikes", mod: "Artifacts", kind: "Artefato", note: "Imune a knockback" },
        ],
      },
      {
        tier: 3,
        tierName: "Guardião das Montanhas",
        title: "Ossos da Terra",
        requirement:
          "Derrote o Ancient Remnant na Cursed Pyramid, o Frostmaw e conclua a prova do Sculptor.",
        location: "Cursed Pyramid / Tundra / Torre do Sculptor",
        items: [
          { name: "Bone Reptile Armor", mod: "L_Ender's Cataclysm", kind: "Armadura", qty: "Set completo" },
          { name: "Sandstorm in a Bottle", mod: "L_Ender's Cataclysm", kind: "Artefato" },
          { name: "Earthrend Gauntlet", mod: "Mowzie's Mobs", kind: "Arma", note: "Geomancia" },
          { name: "Ice Crystal", mod: "Mowzie's Mobs", kind: "Magia" },
          { name: "Terrasteel Armor", mod: "Botania", kind: "Armadura", qty: "Set completo" },
          { name: "Rod of the Terra Firma", mod: "Botania", kind: "Magia" },
        ],
      },
      {
        tier: 4,
        tierName: "Mestre do Equilíbrio",
        title: "Nada Acima do Equilíbrio",
        requirement:
          "Derrote o Gaia Guardian II e Maledictus na Frosted Prison. O equilíbrio exige enfrentar ambos os extremos.",
        location: "Ritual de Gaia / Frosted Prison",
        items: [
          { name: "Terra Blade", mod: "Botania", kind: "Arma" },
          { name: "Gaia Spirit", mod: "Botania", kind: "Material", qty: "×8" },
          { name: "Cursium Ingot", mod: "L_Ender's Cataclysm", kind: "Material", qty: "×4", note: "Crafta o Soul Render" },
          { name: "Soul Render", mod: "L_Ender's Cataclysm", kind: "Arma" },
          { name: "Ring of Odin", mod: "Botania", kind: "Artefato", note: "+10 de vida" },
          { name: "Essência do Equilíbrio", mod: "Arcanum", kind: "Exclusivo", note: "1 de 4 partes do Arcano" },
        ],
      },
    ],
  },

  // ─────────────────────────── PACTO ───────────────────────────
  {
    master: "pacto",
    tiers: [
      {
        tier: 4,
        tierName: "Portador do Arcano",
        title: "O Pacto dos Quatro",
        requirement:
          "Reúna as quatro Essências (Força, Conhecimento, Liberdade e Equilíbrio) e apresente-as no Altar do Pacto.",
        location: "Altar do Pacto (coordenadas reveladas ao obter a 4ª Essência)",
        items: [
          { name: "Netherite Battlemage Armor", mod: "Iron's Spells 'n Spellbooks", kind: "Armadura", qty: "Set completo" },
          { name: "Netherite Spell Book", mod: "Iron's Spells 'n Spellbooks", kind: "Magia" },
          { name: "Cataclysmic Gate Pearl", mod: "L_Ender's Cataclysm", kind: "Utilidade" },
          { name: "Eye of the Flügel", mod: "Botania", kind: "Artefato" },
          { name: "Mechanical Fusion Anvil", mod: "L_Ender's Cataclysm", kind: "Utilidade" },
          { name: "Fragmento do Arcano", mod: "Arcanum", kind: "Exclusivo", note: "Título: Portador do Arcano" },
        ],
      },
    ],
  },
];

export const mods = [
  { name: "L_Ender's Cataclysm", role: "Bosses e armas lendárias (Ignis, Leviathan, Ender Guardian, Ancient Remnant, Scylla, Maledictus, Harbinger, Netherite Monstrosity)", tag: "Combate" },
  { name: "Iron's Spells 'n Spellbooks", role: "Escolas de magia elemental — Fogo, Gelo, Raio e Natureza — livros, pergaminhos e armaduras de mago", tag: "Magia" },
  { name: "Ars Nouveau", role: "Glifos, livros de feitiço e artefatos de mana. A escola de Neris.", tag: "Magia" },
  { name: "Botania", role: "Mana natural, Terrasteel, Terra Blade e Gaia Guardian. A escola de Erdan.", tag: "Magia" },
  { name: "The Aether", role: "Dimensão dos céus, Valkyrie e Phoenix. O reino de Avatis.", tag: "Dimensão" },
  { name: "Twilight Forest", role: "Naga, Lich, Hydra e os metais Fiery / Knightmetal.", tag: "Dimensão" },
  { name: "Ice and Fire", role: "Dragões de Fogo, Gelo e Raio; armaduras de escamas e Dragonsteel.", tag: "Criaturas" },
  { name: "Mowzie's Mobs", role: "Ferrous Wroughtnaut, Frostmaw, Umvuthi e Sculptor.", tag: "Criaturas" },
  { name: "Deeper and Darker", role: "Otherside, Warden Armor e Sonorous Staff.", tag: "Dimensão" },
  { name: "Artifacts", role: "Acessórios Curios: Cloud in a Bottle, Crystal Heart, Power Glove...", tag: "Artefatos" },
  { name: "Create", role: "Engenharia de Andesite/Brass — as máquinas de Erdan.", tag: "Tecnologia" },
  { name: "Aquaculture", role: "Neptunium — o metal das marés.", tag: "Recursos" },
  { name: "Waystones", role: "Viagem rápida entre continentes.", tag: "Utilidade" },
  { name: "Curios API", role: "Slots de acessórios para todos os artefatos.", tag: "Base" },
];
