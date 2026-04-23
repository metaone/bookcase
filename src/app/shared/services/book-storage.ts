import { Injectable } from '@angular/core';
import { Nullable, SortingOrder } from '../types';
import { BooksCollection } from '../collections';
import { BookModel } from '../models';
import { BookFetchOptions } from '../interfaces';


/**
 * Book storage service
 */
@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  /** List of all books */
  private readonly items: BookModel[];

  constructor() {
    this.items = Object.values(BooksCollection)
      .filter((item) => typeof item === 'number')
      .map((item) => new BookModel(item));
  }

  /**
   * Returns book by ID
   * @param id - Book ID to search
   */
  getById(id: BooksCollection): Nullable<BookModel> {
    return this.items.find((book) => book.id === id) || null;
  }

  /**
   * Returns all books which accepts provided options
   * @param options - Fetch options
   */
  getAll(options: BookFetchOptions = { sortingOrder: 'asc' }): BookModel[] {
    return this.items
      .filter((book) => !options.searchQuery || book.includes(options.searchQuery))
      .filter((book) => !options.authorsIds || !options.authorsIds.length || book.hasAuthor(options.authorsIds))
      .filter((book) => !options.genresIds || !options.genresIds.length || book.hasGenre(options.genresIds))
      .sort((a, b) => options.sortingOrder === 'desc'
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title)
      );
  }
}
