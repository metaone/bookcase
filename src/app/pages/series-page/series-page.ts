import { Component, inject, signal } from '@angular/core';
import { NoResults, SeriesStorage, SortingOrder } from '../../shared';
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
  styleUrl: './series-page.scss',
})
export class SeriesPage {
  private seriesStorage = inject(SeriesStorage);
  sortingOrder: SortingOrder = 'asc';
  searchQuery = '';
  seriesList = signal<SeriesModel[]>(this.seriesStorage.getAll());

  onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    this.fetchWorks();
  }

  fetchWorks() {
    this.seriesList.set(
      this.seriesStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
      }),
    );
  }
}
