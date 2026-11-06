export type Flavour = {
  slug: string;
  shortName: string;
  name: string;
  kind: "Jus" | "Nectar" | "Cocktail";
  composition: string;
  tint: string;
  image: { src: string; width: number; height: number; alt: string };
};

// Compositions come from the client's brochure (plaquette commerciale).
export const flavours: Flavour[] = [
  {
    slug: "ananas",
    shortName: "Ananas",
    name: "Jus d’Ananas Pur",
    kind: "Jus",
    composition: "Pulpe d’ananas, menthe fraîche",
    tint: "#FFEFB3",
    image: {
      src: "/images/juices/ananas.webp",
      width: 843,
      height: 641,
      alt: "Bouteilles de jus d’ananas pur Fruitzy-Joy",
    },
  },
  {
    slug: "ananas-gingembre",
    shortName: "Ananas Gingembre",
    name: "Jus d’Ananas au Gingembre",
    kind: "Jus",
    composition: "Pulpe d’ananas, pulpe de gingembre, menthe fraîche",
    tint: "#E9F0B4",
    image: {
      src: "/images/juices/ananas-gingembre.webp",
      width: 777,
      height: 581,
      alt: "Bouteilles de jus d’ananas au gingembre Fruitzy-Joy",
    },
  },
  {
    slug: "mangue-ananas",
    shortName: "Mangue Ananas",
    name: "Nectar de Mangue à l’Ananas",
    kind: "Nectar",
    composition: "Pulpe de mangue, pulpe d’ananas",
    tint: "#FFDDB0",
    image: {
      src: "/images/juices/mangue-ananas.webp",
      width: 866,
      height: 614,
      alt: "Bouteilles de nectar de mangue à l’ananas Fruitzy-Joy",
    },
  },
  {
    slug: "baobab",
    shortName: "Baobab",
    name: "Nectar de Baobab Pur",
    kind: "Nectar",
    composition: "Pulpe de baobab, eau, sucre",
    tint: "#F5E3CB",
    image: {
      src: "/images/juices/baobab.webp",
      width: 807,
      height: 637,
      alt: "Bouteilles de nectar de baobab pur Fruitzy-Joy",
    },
  },
  {
    slug: "baobab-gingembre",
    shortName: "Baobab Gingembre",
    name: "Nectar de Baobab au Gingembre",
    kind: "Nectar",
    composition: "Pulpe de baobab, pulpe de gingembre, eau, sucre",
    tint: "#E2ECCB",
    image: {
      src: "/images/juices/baobab-gingembre.webp",
      width: 793,
      height: 626,
      alt: "Bouteilles de nectar de baobab au gingembre Fruitzy-Joy",
    },
  },
  {
    slug: "cocktail",
    shortName: "Cocktail",
    name: "Cocktail de Fruits",
    kind: "Cocktail",
    composition: "Fruits de saison",
    tint: "#FFD3C7",
    image: {
      src: "/images/juices/cocktail.webp",
      width: 850,
      height: 672,
      alt: "Bouteilles de cocktail de fruits Fruitzy-Joy",
    },
  },
];

export const contact = {
  phoneDisplay: "+237 695 994 943",
  phoneHref: "tel:+237695994943",
  email: "annie.pounde@gmail.com",
  location: "Simbock, Yaoundé, Cameroun",
};
