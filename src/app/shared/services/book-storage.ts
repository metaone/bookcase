import { Injectable } from '@angular/core';
import { BOOKS } from '../models';
import { BookMetadata } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  private readonly books: BookMetadata[];
  private readonly authors: string[];

  constructor() {
    this.books = [
      ...BOOKS
    ].sort((a, b) => a.title.localeCompare(b.title));
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
}
