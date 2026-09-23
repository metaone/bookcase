import { Component, inject, OnInit, signal, TemplateRef, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  AuthorsCollection,
  BookCard,
  BookStorage, FilterCheckboxInterfaces,
  GenresCollection,
  GenreStorage,
  NoResults, QueryParamsStore, SeriesCollection, SeriesStorage,
  SortingOrder
} from '../../shared';
import { FormsModule } from '@angular/forms';
import { NgbCollapse, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuthorStorage } from '../../shared';
import { BookModel } from '../../shared/models';
import { RouterLink } from '@angular/router';


/**
 * Home page component
 */
@Component({
  selector: 'app-books-page',
  imports: [
    BookCard,
    FormsModule,
    NoResults,
    NgbCollapse,
    RouterLink,
  ],
  templateUrl: './books-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  /** BookStorage service instance */
  private bookStorage = inject(BookStorage);
  /** AuthorStorage service instance */
  private authorStorage = inject(AuthorStorage);

  private genreStorage = inject(GenreStorage);
  private seriesStorage = inject(SeriesStorage);

  private offcanvas = inject(NgbOffcanvas);
  private queryParamStore = inject(QueryParamsStore);

  /** List of books */
  booksList = signal<BookModel[]>([]);

  /** Search text */
  @Input() searchQuery = '';
  /** Sorting ordering value */
  @Input() sortingOrder: SortingOrder = 'asc';

  authorFilterOptions: FilterCheckboxInterfaces[];
  authorFilterCollapse = false;
  genreFilterOptions: FilterCheckboxInterfaces[];
  genreFilterCollapse = false;
  seriesFilterOptions: FilterCheckboxInterfaces[];
  seriesFilterCollapse = false;

  constructor() {
    this.authorFilterOptions = this.authorStorage.getAll().map((author) => ({
      id: author.id,
      value: author.name,
      checked: false,
    }));

    this.genreFilterOptions = this.genreStorage.getAll().map((genre) => ({
      id: genre.id,
      value: genre.name,
      checked: false,
    }));

    this.seriesFilterOptions = this.seriesStorage.getAll().map((series) => ({
      id: series.id,
      value: series.title,
      checked: false,
    }));
  }

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.fetchBooks();
  }

  openFilters(template: TemplateRef<any>) {
    this.offcanvas.open(template, { position: 'start' });
  }

  /**
   * Handles on sorting action
   */
  async onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    await this.queryParamStore.updateQueryParams({ sortingOrder: this.sortingOrder });
    this.fetchBooks();
  }

  /**
   * Updates books list
   * @protected
   */
  protected fetchBooks() {

    this.booksList.set(
      this.bookStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
        authorsIds: this.authorFilterOptions.filter((item) => item.checked).map((item) => <AuthorsCollection>item.id),
        genresIds: this.genreFilterOptions.filter((item) => item.checked).map((item) => <GenresCollection>item.id),
        seriesIds: this.seriesFilterOptions.filter((item) => item.checked).map((item) => <SeriesCollection>item.id),
      })
    );
  }
}
