import {
  AuthorsCollection,
  BooksCollection,
  GenresCollection,
  SeriesCollection,
  WorksCollection
} from '../collections';

/** Nullable type */
export type Nullable<T> = T | null;

export type Collection = AuthorsCollection | BooksCollection | GenresCollection | SeriesCollection | WorksCollection;
