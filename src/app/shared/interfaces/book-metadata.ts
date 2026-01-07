import { Authors, Books } from '../enums';

export interface BookMetadata {
  id: number;
  title: Books;
  coverImage: string;
  authors: Authors[];
  description: string[];
  contents: BookMetadataContentsItem[];
}

export interface BookMetadataContentsItem {
  authors: Authors[];
  title: Books;
}
