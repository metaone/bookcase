import { BooksCollection, GenresCollection } from '../collections';

/** Book to genres reference */
export const BookToGenresRef: Record<BooksCollection, GenresCollection[]> = {
  [BooksCollection['Облудні сосни. Книга 1. Сосни']]: [GenresCollection.Фантастика, GenresCollection.Детектив],
  [BooksCollection['Облудні сосни. Книга 2. Облуда']]: [GenresCollection.Фантастика, GenresCollection.Детектив],
  [BooksCollection['Облудні сосни. Книга 3. Останнє місто']]: [GenresCollection.Фантастика, GenresCollection.Детектив],
  [BooksCollection['Невидимі планети. Антологія сучасної китайської наукової фантастики']]: [
    GenresCollection.Фантастика,
    GenresCollection.Антологія
  ],
  [BooksCollection.Апґрейд]: [GenresCollection.Фантастика],
  [BooksCollection.Рекурсія]: [GenresCollection.Фантастика],
  [BooksCollection['Темна матерія']]: [GenresCollection.Фантастика],
  [BooksCollection.Убік]: [GenresCollection.Фантастика],
  [BooksCollection['Чи мріють андроїди про електричних овець?']]: [
    GenresCollection['Фантастика'],
    GenresCollection['Кіберпанк'],
    GenresCollection['Пост-апокаліпсис'],
  ],
  [BooksCollection['Ігрові консолі 2.0. Історія у фотографіях від Atari до Xbox']]: [
    GenresCollection['Комп\'ютерні ігри'],
    GenresCollection['Артбук'],
  ],
  [BooksCollection['Всесвітній атлас тату']]: [
    GenresCollection['Культура та мистецтво'],
    GenresCollection['Татуювання'],
    GenresCollection['Артбук'],
  ],
  [BooksCollection['1984. Графічний роман']]: [
    GenresCollection['Графічні новели'],
    GenresCollection['Фантастика'],
    GenresCollection['Антиутопія'],
    GenresCollection['Артбук'],
  ],
  [BooksCollection['Експансія. Книга 1. І прокинеться Левіафан']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 2. Війна Калібана']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 3. Брама Абаддона']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 4. На згарищі Сіболи']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 5. Ігри Немезиди']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 6. У попелі Вавилону']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
  [BooksCollection['Експансія. Книга 7. Сходження Персеполісу']]: [
    GenresCollection.Фантастика,
    GenresCollection['Воєнна фантастика'],
    GenresCollection['Космічна фантастика'],
    GenresCollection.Пригоди,
  ],
}
