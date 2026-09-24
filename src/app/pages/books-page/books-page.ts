import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal, TemplateRef } from '@angular/core';
import {
  Book,
  BookCard,
  DataProvider,
  FilterCheckboxInterfaces,
  NoResults,
  QueryParamsStore,
  SortingOrder
} from '../../shared';
import { FormsModule } from '@angular/forms';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem,
  NgbCollapse,
  NgbModal,
  NgbOffcanvas
} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-books-page',
  imports: [
    BookCard,
    FormsModule,
    NoResults,
    NgbCollapse,
    RouterLink,
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective,
    NgbAccordionHeader,
    NgbAccordionItem,
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
  /** Data Provider */
  private dataProvider = inject(DataProvider);
  /** Query Param Store */
  private queryParamStore = inject(QueryParamsStore);
  /** Offcanvas */
  private offcanvas = inject(NgbOffcanvas);
  /** Modal */
  private modal = inject(NgbModal);
  /** List of books */
  booksList = signal<Book[]>([]);
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
  /** Book to show in modal */
  modalBook?: Book;

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.initFilters();
    this.fetchBooks();
  }

  /** Opens filters sidebar */
  openFilters(template: TemplateRef<any>) {
    this.offcanvas.open(template, { position: 'end' });
  }

  openModal(book: Book, template: TemplateRef<any>) {
    this.modalBook = book;
    this.modal.open(template, {
      size: 'xl',
      animation: true,
    });
  }

  /**
   * Inits filters
   */
  initFilters() {
    this.authorFilterOptions = this.getFilterOptions(this.dataProvider.getAuthors(), this.authorFilter);
    this.genreFilterOptions = this.getFilterOptions(this.dataProvider.getGenres(), this.genreFilter);
    this.seriesFilterOptions = this.getFilterOptions(this.dataProvider.getSeries(), this.seriesFilter);
  }

  /**
   * Returns filter options
   * @param collection - Related collection
   * @param queryParam - Query parameter for the related filter
   */
  getFilterOptions(collection: string[], queryParam?: string): FilterCheckboxInterfaces[] {
    return collection.map((item, index) => ({
      id: index,
      value: item,
      checked: !!queryParam?.split(',').includes(index.toString()),
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
   */
  fetchBooks() {
    const text = this.searchQuery ?? '';

    const authors = this.authorFilterOptions
      .filter((item) => item.checked)
      .map((item) => item.value);

    const genres = this.genreFilterOptions
      .filter((item) => item.checked)
      .map((item) => item.value);

    const series = this.seriesFilterOptions
      .filter((item) => item.checked)
      .map((item) => item.value);


    this.booksList.set(
      this.dataProvider.getBooks({
        text,
        authors,
        genres,
        series
      }, this.sortingOrder),
    )
  }
}
