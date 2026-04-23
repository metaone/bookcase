import { BooksCollection, WorksCollection } from '../collections';

/** Book to works reference */
export const BookToWorksRef: Record<BooksCollection, WorksCollection[]> = {
  [BooksCollection['Облудні сосни. Книга 1. Сосни']]: [WorksCollection.Сосни],
  [BooksCollection['Облудні сосни. Книга 2. Облуда']]: [WorksCollection.Облуда],
  [BooksCollection['Облудні сосни. Книга 3. Останнє місто']]: [WorksCollection['Останнє місто']],
  [BooksCollection['Невидимі планети. Антологія сучасної китайської наукової фантастики']]: [
    WorksCollection['Рік Щура'],
    WorksCollection['Ліцзянські рибки'],
    WorksCollection['Шацзуйська квітка'],
    WorksCollection['Тонтонове літо'],
    WorksCollection['Нічна прогулянка дракона'],
    WorksCollection['Місто тиші'],
    WorksCollection['Невидимі планети'],
    WorksCollection['Складаний Пекін'],
    WorksCollection['Сороміцька оповідка'],
    WorksCollection['Гробниця світляків'],
    WorksCollection['Опіка над Богом'],
  ],
  [BooksCollection.Апґрейд]: [WorksCollection.Апґрейд],
  [BooksCollection.Рекурсія]: [WorksCollection.Рекурсія],
  [BooksCollection['Темна матерія']]: [WorksCollection['Темна матерія']],
  [BooksCollection.Убік]: [WorksCollection.Убік],
  [BooksCollection['Чи мріють андроїди про електричних овець?']]: [
    WorksCollection['Чи мріють андроїди про електричних овець?']
  ],
  [BooksCollection['Ігрові консолі 2.0. Історія у фотографіях від Atari до Xbox']]: [
    WorksCollection['Ігрові консолі 2.0. Історія у фотографіях від Atari до Xbox'],
  ],
  [BooksCollection['Всесвітній атлас тату']]: [WorksCollection['Всесвітній атлас тату']],
  [BooksCollection['1984. Графічний роман']]: [WorksCollection['1984. Графічний роман']],
  [BooksCollection['Експансія. Книга 1. І прокинеться Левіафан']]: [WorksCollection['І прокинеться Левіафан']],
  [BooksCollection['Експансія. Книга 2. Війна Калібана']]: [WorksCollection['Війна Калібана']],
  [BooksCollection['Експансія. Книга 3. Брама Абаддона']]: [WorksCollection['Брама Абаддона']],
  [BooksCollection['Експансія. Книга 4. На згарищі Сіболи']]: [WorksCollection['На згарищі Сіболи']],
  [BooksCollection['Експансія. Книга 5. Ігри Немезиди']]: [WorksCollection['Ігри Немезиди']],
  [BooksCollection['Експансія. Книга 6. У попелі Вавилону']]: [WorksCollection['У попелі Вавилону']],
  [BooksCollection['Експансія. Книга 7. Сходження Персеполісу']]: [WorksCollection['Сходження Персеполісу']],
}
