import { Injectable } from '@angular/core';
import { SeriesModel } from '../models';
import { SeriesCollection } from '../collections';
import { Nullable } from '../types';
import { SeriesFetchOptions } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SeriesStorage {
  /** List of all works */
  private readonly items: SeriesModel[];

  constructor() {
    this.items = Object.values(SeriesCollection)
      .filter((item) => typeof item === 'number')
      .map((item) => new SeriesModel(item));
  }

  getById(id: SeriesCollection): Nullable<SeriesModel> {
    return this.items.find((item) => item.id === id) || null;
  }

  getAll(options: SeriesFetchOptions = { sortingOrder: 'asc' }): SeriesModel[] {
    return this.items.filter((series) => !options.searchQuery || series.includes(options.searchQuery))
      .sort((a, b) => options.sortingOrder === 'desc'
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title)
      );
  }
}
