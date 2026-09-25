import { Service } from '@angular/core';
import Fuse, { Expression } from 'fuse.js';
import { BooksData } from '../data';
import { Book, SearchOptions } from '../interfaces';
import { SortingOrder } from '../types';

/** Compare util function */
const compare = new Intl.Collator('uk', { sensitivity: 'base' }).compare;

@Service()
export class DataProvider {
  /** Books data */
  private readonly booksData = BooksData;
  /** List of all search keys for Fuse.js */
  private readonly searchKeys = ['title', 'authors', 'genres', 'series', 'works.title', 'works.authors'];
  /** List of authors */
  private readonly authors: string[];
  /** List of series */
  private readonly series: string[];
  /** List of genres */
  private readonly genres: string[];
  /** Fuse.js instance with loaded books data */
  private fuse = new Fuse(this.booksData, {
    keys: this.searchKeys,
    useExtendedSearch: true,
    threshold: 0.3,
  });

  /**
   * @inheritDoc
   */
  constructor() {
    const authors = new Set<string>();
    const series = new Set<string>();
    const genres = new Set<string>();

    this.booksData.forEach((data) => {
      data.authors.forEach((item) => authors.add(item));
      data.works?.forEach((item) => item.authors.forEach((value) => authors.add(value)));
      if (data.series) {
        series.add(data.series);
      }
      data.genres.forEach((item) => genres.add(item));
    });

    this.authors = [...authors].sort(compare);
    this.series = [...series].sort(compare);
    this.genres = [...genres].sort(compare);
  }

  /**
   * Returns list of all authors
   */
  getAuthors(): string[] {
    return this.authors;
  }

  /**
   * Returns list of all book series
   */
  getSeries(): string[] {
    return this.series;
  }

  /**
   * Returns list of all book genres
   */
  getGenres(): string[] {
    return this.genres;
  }

  /**
   * Returns list of books
   * @param options - Search options
   * @param sorting - Sorting order
   */
  getBooks(options: SearchOptions, sorting: SortingOrder = 'asc'): Book[] {
    const conditions: Expression[] = [];

    if (options.text) {
      conditions.push({
        $or: this.searchKeys.map((key) => ({ [key]: options.text })),
      });
    }

    if (options.authors.length) {
      conditions.push({
        $or: ['authors', 'works.authors'].flatMap((key) => options.authors.map((v) => ({ [key]: `="${v}"` }))),
      });
    }

    if (options.genres.length) {
      conditions.push({
        $or: ['genres'].flatMap((key) => options.genres.map((v) => ({ [key]: `="${v}"` }))),
      });
    }

    if (options.series.length) {
      conditions.push({
        $or: ['series'].flatMap((key) => options.series.map((v) => ({ [key]: `="${v}"` }))),
      });
    }

    return this.fuse.search(conditions.length ? { $and: conditions } : '')
      .map((result) => result.item)
      .sort((a, b) => sorting === 'desc' ? compare(b.title, a.title) : compare(a.title, b.title));
  }
}
