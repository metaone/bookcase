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
    this.parseBooksMetadata();
    this.parseAuthorsMetadata();
  }

  parseBooksMetadata() {
    this.books = [...BOOKS];
    this.applySorting();
  }

  parseAuthorsMetadata() {
    this.authors = [
      ...new Set(this.books.map((book) => book.authors).flat())
    ].sort();
  }

  /**
   * Returns list of books
   * @param searchText - Text to search by
   */
  getBooks(searchText: string = ''): BookMetadata[] {
    return this.books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
  }

  /**
   * Returns list of authors
   */
  getAuthors(): string[] {
    return this.authors;
  }

  setOrdering(order: SortingOrder) {
    this.sortingOrder = order;
    this.applySorting();
  }

  getOrdering(): SortingOrder {
    return this.sortingOrder;
  }

  private applySorting() {
    this.books.sort((a, b) => this.sortingOrder === 'desc'
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
    );
  }
}
