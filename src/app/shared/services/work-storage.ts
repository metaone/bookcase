import { Injectable } from '@angular/core';
import { WorkModel } from '../models';
import { Nullable } from '../types';
import { WorksCollection } from '../collections';


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
  getAll(): WorkModel[] {
    return this.items;
  }
}
