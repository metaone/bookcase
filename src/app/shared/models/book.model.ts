import {
  BookToAuthorsRef,
  BookToBlurpRef,
  BookToCoverRef,
  BookToGenresRef,
  BookToSeriesRef,
  BookToWorksRef, WorkToAuthorsRef
} from '../refs';
import { Nullable } from '../types';
import {
  AuthorsCollection,
  BooksCollection,
  GenresCollection,
  SeriesCollection,
  WorksCollection
} from '../collections';
import { BookAuthorField, BookGenreField, BookSeriesField, BookWorkField } from '../interfaces';


/**
 * Book model
 */
export class BookModel {
  /** ID */
  readonly id: BooksCollection;
  /** Title */
  readonly title: string;
  /** Cover image */
  readonly coverImage: string;
  /** Blurp */
  readonly blurp: Nullable<string[]>;
  /** List of authors */
  readonly authors: BookAuthorField[];
  /** List of genres */
  readonly genres: BookGenreField[];
  /** List of works */
  readonly works: BookWorkField[];
  /** Series contains the book */
  readonly series: Nullable<BookSeriesField> = null;

  /**
   * Creates book model
   * @param bookId - Book ID
   */
  constructor(bookId: BooksCollection) {
    this.id = bookId;
    this.title = BooksCollection[bookId];
    this.coverImage = BookToCoverRef[bookId];
    this.blurp = BookToBlurpRef[bookId];

    this.authors = BookToAuthorsRef[bookId].map((authorId) => ({
      id: authorId,
      name: AuthorsCollection[authorId],
    }));

    this.genres = BookToGenresRef[bookId].map((genreId) => ({
      id: genreId,
      name: GenresCollection[genreId],
    }));

    this.works = BookToWorksRef[bookId].map((workId) => ({
      id: workId,
      title: WorksCollection[workId],
      authors: WorkToAuthorsRef[workId].map((authorId) => ({
        id: authorId,
        name: AuthorsCollection[authorId],
      })),
    }));

    if (typeof BookToSeriesRef[bookId] === 'number') {
      this.series = {
        id: BookToSeriesRef[bookId],
        title: SeriesCollection[BookToSeriesRef[bookId]],
      }
    }
  }

  /**
   * Returns if book title, some work or author name contains provided substring
   * @param substring - Text to search by
   */
  includes(substring: string = ''): boolean {
    substring = substring.toLowerCase();
    return this.title.toLowerCase().includes(substring) ||
      !!this.works.find((work) => work.title.toLowerCase().includes(substring)) ||
      !!this.authors.find((author) => author.name.toLowerCase().includes(substring));
  }

  /**
   * Returns if book or its works has at least one of the provided authors IDs
   * @param ids - List of authors IDs
   */
  hasAuthor(ids: AuthorsCollection[] = []): boolean {
    return !!this.authors.find((author) => ids.includes(author.id)) ||
      !!this.works.find((work) => work.authors.find((author) => ids.includes(author.id)));
  }

  hasGenre(ids: GenresCollection[] = []): boolean {
    return !!this.genres.find((genre) => ids.includes(genre.id));
  }
}
