import { Component, inject, signal, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { NoResults, QueryParamsStore, SeriesStorage, SortingOrder } from '../../shared';
import { SeriesModel, WorkModel } from '../../shared/models';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-page',
  imports: [
    FormsModule,
    RouterLink,
    NoResults
  ],
  templateUrl: './series-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './series-page.scss',
})
export class SeriesPage implements OnInit {
  /** Search text */
  @Input() searchQuery?: string;
  /** Sorting ordering value */
  @Input() sortingOrder?: SortingOrder;
  /** Series Storage */
  private seriesStorage = inject(SeriesStorage);
  /** Query Param Store */
  private queryParamStore = inject(QueryParamsStore);
  /** List of series */
  seriesList = signal<SeriesModel[]>([]);

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.fetchSeries();
  }

  /**
   * Handles on sorting action
   */
  async onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    await this.queryParamStore.updateQueryParams({ sortingOrder: this.sortingOrder });
    this.fetchSeries();
  }

  /**
   * Handles on search keyup action
   */
  async onSearchKeyup() {
    await this.queryParamStore.updateQueryParams({ searchQuery: this.searchQuery || null });
    this.fetchSeries();
  }

  /**
   * Fetches series list
   */
  fetchSeries() {
    this.seriesList.set(
      this.seriesStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
      }),
    );
  }
}
