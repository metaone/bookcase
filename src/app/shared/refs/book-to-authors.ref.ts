import { AuthorsCollection, BooksCollection } from '../collections';

/** Book to authors list reference */
export const BookToAuthorsRef: Record<BooksCollection, AuthorsCollection[]> = {
  [BooksCollection['Облудні сосни. Книга 1. Сосни']]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection['Облудні сосни. Книга 2. Облуда']]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection['Облудні сосни. Книга 3. Останнє місто']]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection['Невидимі планети. Антологія сучасної китайської наукової фантастики']]: [
    AuthorsCollection['Кен Лю']
  ],
  [BooksCollection.Апґрейд]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection.Рекурсія]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection['Темна матерія']]: [AuthorsCollection['Блейк Крауч']],
  [BooksCollection.Убік]: [AuthorsCollection['Філіп К. Дік']],
  [BooksCollection['Чи мріють андроїди про електричних овець?']]: [AuthorsCollection['Філіп К. Дік']],
  [BooksCollection['Ігрові консолі 2.0. Історія у фотографіях від Atari до Xbox']]: [AuthorsCollection['Еван Амос']],
  [BooksCollection['Всесвітній атлас тату']]: [AuthorsCollection['Анна Фелісіті Фрідман']],
  [BooksCollection['1984. Графічний роман']]: [
    AuthorsCollection['Джордж Орвелл'],
    AuthorsCollection['Ксав\'є Кост'],
  ],
  [BooksCollection['Експансія. Книга 1. І прокинеться Левіафан']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 2. Війна Калібана']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 3. Брама Абаддона']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 4. На згарищі Сіболи']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 5. Ігри Немезиди']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 6. У попелі Вавилону']]: [AuthorsCollection['Джеймс Корі']],
  [BooksCollection['Експансія. Книга 7. Сходження Персеполісу']]: [AuthorsCollection['Джеймс Корі']],
}
