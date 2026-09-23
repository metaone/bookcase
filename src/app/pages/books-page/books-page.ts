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
  /** Search text */
  @Input() searchQuery?: string;
  /** Sorting ordering value */
  @Input() sortingOrder?: SortingOrder;
  /** Author filter */
  @Input() authorFilter?: string;
  /** Genre filter */
  @Input() genreFilter?: string;
  /** Series filter */
  @Input() seriesFilter?: string;
  /** Book Storage */
  private bookStorage = inject(BookStorage);
  /** Author Storage */
  private authorStorage = inject(AuthorStorage);
  /** Genre Storage */
  private genreStorage = inject(GenreStorage);
  /** Series Storage */
  private seriesStorage = inject(SeriesStorage);
  /** Query Param Store */
  private queryParamStore = inject(QueryParamsStore);
  /** Offcanvas */
  private offcanvas = inject(NgbOffcanvas);
  /** List of books */
  booksList = signal<BookModel[]>([]);
  /** Author filter options */
  authorFilterOptions: FilterCheckboxInterfaces[] = [];
  /** Author filter collapse state */
  authorFilterCollapse = false;
  /** Genre filter options */
  genreFilterOptions: FilterCheckboxInterfaces[] = [];
  /** Genre filter collapse state */
  genreFilterCollapse = false;
  /** Series filter options */
  seriesFilterOptions: FilterCheckboxInterfaces[] = [];
  /** Series filter collapse state */
  seriesFilterCollapse = false;

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.initFilters();
    this.fetchBooks();
  }

  /** Opens filters sidebar */
  openFilters(template: TemplateRef<any>) {
    this.offcanvas.open(template, { position: 'start' });
  }

  /**
   * Inits filters
   */
  initFilters() {
    this.authorFilterOptions = this.authorStorage.getAll().map((author) => ({
      id: author.id,
      value: author.name,
      checked: !!this.authorFilter?.split(',').includes(author.id.toString()),
    }));

    this.genreFilterOptions = this.genreStorage.getAll().map((genre) => ({
      id: genre.id,
      value: genre.name,
      checked: !!this.genreFilter?.split(',').includes(genre.id.toString()),
    }));

    this.seriesFilterOptions = this.seriesStorage.getAll().map((series) => ({
      id: series.id,
      value: series.title,
      checked: !!this.seriesFilter?.split(',').includes(series.id.toString()),
    }));
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
   * Handles on search keyup action
   */
  async onSearchKeyup() {
    await this.queryParamStore.updateQueryParams({ searchQuery: this.searchQuery || null });
    this.fetchBooks();
  }

  /**
   * Handles on author filter change
   */
  async onAuthorFilterChange() {
    await this.queryParamStore.updateQueryParams({
      authorFilter: this.authorFilterOptions
        .filter((item) => item.checked)
        .map((item) => item.id)
        .join(',') || null
    });
    this.fetchBooks();
  }

  /**
   * Handles on genre filter change
   */
  async onGenreFilterChange() {
    await this.queryParamStore.updateQueryParams({
      genreFilter: this.genreFilterOptions
        .filter((item) => item.checked)
        .map((item) => item.id)
        .join(',') || null
    });
    this.fetchBooks();
  }

  /**
   * Handles on series filter change
   */
  async onSeriesFilterChange() {
    await this.queryParamStore.updateQueryParams({
      seriesFilter: this.seriesFilterOptions
        .filter((item) => item.checked)
        .map((item) => item.id)
        .join(',') || null
    });
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
        authorsIds: this.authorFilterOptions
          .filter((item) => item.checked)
          .map((item) => <AuthorsCollection>item.id),
        genresIds: this.genreFilterOptions
          .filter((item) => item.checked)
          .map((item) => <GenresCollection>item.id),
        seriesIds: this.seriesFilterOptions
          .filter((item) => item.checked)
          .map((item) => <SeriesCollection>item.id),
      })
    );
  }
}
