import { Injectable } from '@angular/core';
import { BOOKS } from '../models';
import { BookMetadata } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  private books: BookMetadata[] = [];
  private authors: string[] = [];

  constructor() {
    this.parseBooksMetadata();
    this.parseAuthorsMetadata();
  }

  parseBooksMetadata() {
    this.books = [
      ...BOOKS
    ].sort((a, b) => a.title.localeCompare(b.title));
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
}
