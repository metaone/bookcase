import { Authors } from '../enums';

export interface BookMetadata {
  id: number;
  title: string;
  coverImage: string;
  authors: Authors[];
}
