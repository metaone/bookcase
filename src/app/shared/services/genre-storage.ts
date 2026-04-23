import { Injectable } from '@angular/core';
import { GenreModel } from '../models';
import { GenresCollection } from '../collections';
import { GenreFetchOptions } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GenreStorage {
  private readonly items: GenreModel[];

  constructor() {
    this.items = Object.values(GenresCollection)
      .filter((id) => typeof id === 'number')
      .map((id) => new GenreModel(id))
  }

  getAll(options: GenreFetchOptions = { sortingOrder: 'asc'} ): GenreModel[] {
    return this.items
      .sort((a, b) => options.sortingOrder === 'desc'
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
      );
  }
}
