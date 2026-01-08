import { Authors, Books, Genres } from '../enums';

export interface BookMetadata {
  id: number;
  title: Books;
  coverImage: string;
  authors: Authors[];
  description: string[];
  genres: Genres[],
  contents: BookMetadataContentsItem[];
}

export interface BookMetadataContentsItem {
  authors: Authors[];
  title: Books;
}
