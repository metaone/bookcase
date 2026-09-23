import { Component, inject, signal, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { AuthorModel, BookModel } from '../../shared/models';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorStorage, NoResults, QueryParamsStore, SortingOrder } from '../../shared';

@Component({
  selector: 'app-authors-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NoResults
  ],
  templateUrl: './authors-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './authors-page.scss',
})
export class AuthorsPage implements OnInit {
  /** Search text */
  @Input() searchQuery?: string;
  /** Sorting ordering value */
  @Input() sortingOrder?: SortingOrder;
  /** Author Storage */
  private authorStorage = inject(AuthorStorage);
  /** Query Param Store */
  private queryParamStore = inject(QueryParamsStore);
  /** List of authors */
  authorsList = signal<AuthorModel[]>([]);

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.fetchAuthors();
  }

  /**
   * Handles on sorting action
   */
  async onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    await this.queryParamStore.updateQueryParams({ sortingOrder: this.sortingOrder });
    this.fetchAuthors();
  }

  /**
   * Handles on search keyup action
   */
  async onSearchKeyup() {
    await this.queryParamStore.updateQueryParams({ searchQuery: this.searchQuery || null });
    this.fetchAuthors();
  }

  /**
   * Fetches authors list
   */
  fetchAuthors() {
    this.authorsList.set(
      this.authorStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
      })
    );
  }
}
