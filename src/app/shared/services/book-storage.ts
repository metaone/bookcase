import { Injectable } from '@angular/core';
import { BOOKS } from '../models';
import { BookMetadata } from '../interfaces';
import { SortingOrder } from '../types';

@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  /** List of books */
  private books: BookMetadata[] = [];
  /** List of authors */
  private authors: string[] = [];
  /** Sorting ordering value */
  private sortingOrder: SortingOrder = 'asc';

  constructor() {
    this.initBooks();
    this.initAuthors();
  }

  /**
   * Inits books list
   */
  initBooks() {
    this.books = [...BOOKS];
    this.applySorting();
  }

  /**
   * Inits authors list
   */
  initAuthors() {
    this.authors = [
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
}
