import { BooksCollection, SeriesCollection } from '../collections';

/** Book to series reference */
export const BookToSeriesRef: Partial<Record<BooksCollection, SeriesCollection>> = {
  [BooksCollection['Облудні сосни. Книга 1. Сосни']]: SeriesCollection['Облудні сосни'],
  [BooksCollection['Облудні сосни. Книга 2. Облуда']]: SeriesCollection['Облудні сосни'],
  [BooksCollection['Облудні сосни. Книга 3. Останнє місто']]: SeriesCollection['Облудні сосни'],
  [BooksCollection['Експансія. Книга 1. І прокинеться Левіафан']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 2. Війна Калібана']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 3. Брама Абаддона']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 4. На згарищі Сіболи']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 5. Ігри Немезиди']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 6. У попелі Вавилону']]: SeriesCollection.Експансія,
  [BooksCollection['Експансія. Книга 7. Сходження Персеполісу']]: SeriesCollection.Експансія,
  [BooksCollection['Південний округ. Книга 1. Знищення']]: SeriesCollection['Південний Округ'],
  [BooksCollection['Південний Округ. Книга 2. Засвідчення']]: SeriesCollection['Південний Округ'],
  [BooksCollection['Південний округ. Книга 3. Замирення']]: SeriesCollection['Південний Округ'],
}
