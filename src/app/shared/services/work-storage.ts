import { Injectable } from '@angular/core';
import { WorkModel } from '../models';
import { Nullable } from '../types';
import { WorksCollection } from '../collections';
import { WorkFetchOptions } from '../interfaces';


/**
 * Work storage service
 */
@Injectable({
  providedIn: 'root',
})
export class WorkStorage {
  /** List of all works */
  private readonly items: WorkModel[];

  /**
   * Creates the work storage service
   */
  constructor() {
    this.items = Object.values(WorksCollection)
      .filter((item) => typeof item === 'number')
      .map((item) => new WorkModel(item))
  }

  /**
   * Returns work by ID
   * @param id - Work ID
   */
  getById(id: WorksCollection): Nullable<WorkModel> {
    return this.items.find((item) => item.id === id) || null;
  }

  /**
   * Returns all works
   */
  getAll(options: WorkFetchOptions = { sortingOrder: 'asc' }): WorkModel[] {
    return this.items
      .filter((work) => !options.searchQuery || work.includes(options.searchQuery))
      .filter((work) => !options.authorsIds || !options.authorsIds.length || work.hasAuthor(options.authorsIds))
      .sort((a, b) => options.sortingOrder === 'desc'
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title)
      );
  }
}
