import { SeriesCollection } from '../collections';

/** Series model */
export class SeriesModel {
  /** ID */
  readonly id: SeriesCollection;
  /** Title */
  readonly title: string;

  constructor(seriesId: SeriesCollection) {
    this.id = seriesId;
    this.title = SeriesCollection[seriesId];
  }

  includes(substring: string = ''): boolean {
    return this.title.toLowerCase().includes(substring.toLowerCase());
  }
}
