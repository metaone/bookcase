export interface BookMetadata {
  title: string;
  coverImage: string;
  authors: string[];
}
export interface BookData extends BookMetadata {
  id: number;
}
