/** Book interface */
export interface Book {
  title: string;
  authors: string[];
  cover: string;
  genres: string[];
  series?: string;
  blurp: string[];
  works?: {
    title: string;
    authors: string[];
  }[];
}
