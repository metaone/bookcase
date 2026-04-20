import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsCollection, BookCard, BookStorage, NoResults, SortingOrder } from '../../shared';
import { FormsModule } from '@angular/forms';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { AuthorStorage } from '../../shared/services/author-storage';
import { BookModel } from '../../shared/models';


/**
 * Home page component
 */
@Component({
  selector: 'app-home-page',
  imports: [
    BookCard,
    FormsModule,
    NgbCollapse,
    NoResults
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  /** BookStorage service instance */
  bookStorage = inject(BookStorage);
  /** AuthorStorage service instance */
  authorStorage = inject(AuthorStorage);

  /** List of books */
  booksList = signal<BookModel[]>([]);

  /** Search text */
  searchQuery = '';
  /** Filters visibility */
  isFiltersHidden = true;
  /** Authors models list */
  authorModels: { id: AuthorsCollection, author: string; isChecked: boolean; }[] = [];

  /** Sorting ordering value */
  sortingOrder: SortingOrder = 'asc';

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.authorModels = this.authorStorage.getAll().map((author) => ({
      id: author.id,
      author: author.name,
      isChecked: true,
    }));
    this.fetchBooks();
  }

  /**
   * Handles on search action
   */
  onSearch() {
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
   * Handles on author change action
   */
  onAuthorChange() {
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
        authorsIds: this.authorModels.filter((item) => item.isChecked).map((item) => item.id),
      })
    );
  }
}
