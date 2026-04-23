import { Component, inject, signal } from '@angular/core';
import { AuthorStorage } from '../../shared/services/author-storage';
import { AuthorModel } from '../../shared/models';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsCollection, GenresCollection, NoResults, SortingOrder } from '../../shared';

@Component({
  selector: 'app-authors-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NoResults
  ],
  templateUrl: './authors-page.html',
  styleUrl: './authors-page.scss',
})
export class AuthorsPage {
  authorStorage = inject(AuthorStorage);
  sortingOrder: SortingOrder = 'asc';
  searchQuery = '';

  authorsList = signal<AuthorModel[]>(this.authorStorage.getAll());

  onSorting() {
    this.sortingOrder = this.sortingOrder === 'desc' ? 'asc' : 'desc';
    this.fetchAuthors();
  }

  protected fetchAuthors() {
    this.authorsList.set(
      this.authorStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
      })
    );
  }
}
