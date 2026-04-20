import { Injectable } from '@angular/core';
import { AuthorModel } from '../models';
import { AuthorsCollection } from '../collections';
import { Nullable } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthorStorage {
  /** List of all authors */
  private readonly items: AuthorModel[];

  constructor() {
    this.items = Object.values(AuthorsCollection)
      .filter((item) => typeof item === 'number')
      .map((item) => new AuthorModel(item));
  }

  /**
   * Returns author by ID
   * @param id - Author ID
   */
  getById(id: AuthorsCollection): Nullable<AuthorModel> {
    return this.items.find((item) => item.id === id) || null;
  }

  /**
   * Returns all authors
   */
  getAll(): AuthorModel[] {
    return this.items;
  }
}
