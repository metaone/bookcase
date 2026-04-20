import { BooksCollection, SeriesCollection } from '../collections';

/** Book to series reference */
export const BookToSeriesRef: Partial<Record<BooksCollection, SeriesCollection>> = {
  [BooksCollection['Облудні сосни. Книга 1. Сосни']]: SeriesCollection['Облудні сосни'],
  [BooksCollection['Облудні сосни. Книга 2. Облуда']]: SeriesCollection['Облудні сосни'],
  [BooksCollection['Облудні сосни. Книга 3. Останнє місто']]: SeriesCollection['Облудні сосни'],
}
