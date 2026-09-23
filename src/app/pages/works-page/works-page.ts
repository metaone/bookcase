import { Component, inject, signal, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import {
  AuthorStorage,
  NoResults, QueryParamsStore,
  SortingOrder,
  WorkStorage
} from '../../shared';
import { WorkModel } from '../../shared/models';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-works-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NoResults,
  ],
  templateUrl: './works-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './works-page.scss',
})
export class WorksPage implements OnInit {
  /** Search text */
  @Input() searchQuery?: string;
  /** Sorting ordering value */
  @Input() sortingOrder?: SortingOrder;
  private workStorage = inject(WorkStorage);
  /** Query Param Store */
  private queryParamStore = inject(QueryParamsStore);
  private authorStorage = inject(AuthorStorage);
  worksList = signal<WorkModel[]>([]);


  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.fetchWorks();
  }

  /**
   * Handles on sorting action
   */
  async onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    await this.queryParamStore.updateQueryParams({ sortingOrder: this.sortingOrder });
    this.fetchWorks();
  }

  /**
   * Handles on search keyup action
   */
  async onSearchKeyup() {
    await this.queryParamStore.updateQueryParams({ searchQuery: this.searchQuery || null });
    this.fetchWorks();
  }

  /**
   * Fetches works list
   */
  fetchWorks() {
    this.worksList.set(
      this.workStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
      }),
    );
  }
}
