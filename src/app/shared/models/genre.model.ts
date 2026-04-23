import { GenresCollection } from '../collections';

export class GenreModel {
  readonly id: GenresCollection;
  readonly name: string;

  constructor(genreId: GenresCollection) {
    this.id = genreId;
    this.name = GenresCollection[genreId];
  }
}
