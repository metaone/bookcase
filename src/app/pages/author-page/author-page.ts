import { Component, inject, OnInit, signal } from '@angular/core';
import { BookCard, BookStorage, NoResults, Nullable, SortingOrder } from '../../shared';
import { AuthorModel, BookModel } from '../../shared/models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-page',
  imports: [
    BookCard,
    NoResults,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './author-page.html',
  styleUrl: './author-page.scss',
})
export class AuthorPage implements OnInit {
  /** ActivatedRoute service instance */
  private activatedRoute = inject(ActivatedRoute);
  /** BookStorage service instance */
  bookStorage = inject(BookStorage);

  author = signal<AuthorModel>(new AuthorModel(Number(this.activatedRoute.snapshot.params['authorId'])));
  /** List of books */
  booksList = signal<BookModel[]>([]);

  /** Search text */
  searchQuery = '';
  /** Sorting ordering value */
  sortingOrder: SortingOrder = 'asc';

  /**
   * @inheritDoc
   */
  ngOnInit() {
    // this.author.set();
    this.fetchBooks();
  }

  /**
   * Handles on sorting action
   * @param order
   */
  onSorting(order: SortingOrder) {
    this.sortingOrder = order;
    this.fetchBooks();
  }

  /**
   * Handles on search action
   */
  onSearch() {
    this.fetchBooks();
  }

  /**
   * Updates books list
   * @private
   */
  private fetchBooks() {
    this.booksList.set(
      this.bookStorage.getAll({
        searchQuery: this.searchQuery,
        sortingOrder: this.sortingOrder,
        authorsIds: [this.author().id],
      })
    );
  }
}
