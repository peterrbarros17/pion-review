export interface HomePageType {
  _id: string;
  alt: string;
  url: string;
  title: string;
  description: string;
  textButton: string;
  slug: string;
}

export interface NewPostPageType {
  _id: string;
  title: string;
  description: string;
  slug: string;
}

export interface ReviewContentBlock {
  type: "paragraph" | "image" | string;
  text?: string;
  alt?: string;
  src?: string;
}

export interface ReviewGameMeta {
  genre?: string;
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  platforms?: string;
  price?: string;
}

export interface ReviewScores {
  overall?: number;
  story?: number;
  gameplay?: number;
  visual?: number;
  length?: number;
  pricepoint?: number;
}

export interface ReviewSection {
  id: string;
  title: string;
  body: string;
  score?: number;
}

export interface ReviewPost {
  _id?: string;
  alt?: string;
  url?: string;
  title: string;
  description?: string;
  slug?: string;
  content?: ReviewContentBlock[];
  format?: "legacy" | "structured";
  gameMeta?: ReviewGameMeta;
  scores?: ReviewScores;
  sections?: ReviewSection[];
  summary?: string;
}
