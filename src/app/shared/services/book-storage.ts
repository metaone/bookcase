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
    this.books = [...BOOKS];
    this.authors = [
      ...new Set(this.books.map((book) => book.authors).flat())
    ].sort();
  }

  getBooks(searchText: string = ''): BookMetadata[] {
    return this.books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
  }

  getAuthors(): string[] {
    return this.authors;
  }
}
