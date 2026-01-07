import { Injectable } from '@angular/core';
import { BookMetadata } from '../interfaces';
import { SortingOrder } from '../types';
import { BooksCollection } from '../collections';

@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  /** List of books */
  private books: BookMetadata[] = [...BooksCollection].sort((a, b) => a.title.localeCompare(b.title));
  /** List of authors */
  private authors: string[] = [];
  /** Sorting ordering value */
  private sortingOrder: SortingOrder = 'asc';

  constructor() {
    this.initAuthors();
  }

  /**
   * Inits authors list
   */
  initAuthors() {
    this.authors = <any>[
      ...new Set(this.books.map((book) => book.authors).flat())
    ].sort();
  }

  /**
   * Returns list of books
   * @param searchText - Text to search by
   * @param authors - List authors to filter
   */
  getBooks(searchText: string = '', authors?: string[]): BookMetadata[] {
    return this.books.filter((book) => {
      let result = true;

      if (searchText) {
        result = book.title.toLowerCase().includes(searchText.toLowerCase());
      }

      if (authors) {
        result = result && !!book.authors.find((author) => authors.includes(author));
      }

      return result;
    });
  }

  /**
   * Returns list of authors
   */
  getAuthors(): string[] {
    return this.authors;
  }

  /**
   * Sets new sorting order
   * @param order - New order
   */
  setOrdering(order: SortingOrder) {
    this.sortingOrder = order;
    this.applySorting();
  }

  /**
   * Return sorting order
   */
  getOrdering(): SortingOrder {
    return this.sortingOrder;
  }

  /**
   * Applies sorting to books list
   * @private
   */
  private applySorting() {
    this.books.sort((a, b) => this.sortingOrder === 'desc'
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
    );
  }

  /**
   * Returns book by ID
   * @param id - Book ID to search
   */
  getById(id: number): BookMetadata | null {
    return this.books.find((book) => book.id === id) || null;
  }
}
