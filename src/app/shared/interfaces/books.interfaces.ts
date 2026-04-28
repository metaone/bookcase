import { AuthorsCollection, GenresCollection, SeriesCollection, WorksCollection } from '../collections';
import { SortingOrder } from '../types';

/** Book model author field interface */
export interface BookAuthorField {
  id: AuthorsCollection;
  name: string;
}

/** Book model series field interface */
export interface BookSeriesField {
  id: SeriesCollection;
  title: string;
}

/** Book model genre field interface */
export interface BookGenreField {
  id: GenresCollection;
  name: string;
}

/** Book model work field interface */
export interface BookWorkField {
  id: WorksCollection;
  title: string;
  authors: BookAuthorField[];
}

/** Book fetch options */
export interface BookFetchOptions {
  searchQuery?: string;
  authorsIds?: AuthorsCollection[];
  genresIds?: GenresCollection[];
  seriesIds?: SeriesCollection[];
  sortingOrder?: SortingOrder;
}
