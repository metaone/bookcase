import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BookCard, BookMetadata, BookStorage, SortingOrder } from '../../shared';
import { FormsModule } from '@angular/forms';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  imports: [
    BookCard,
    FormsModule,
    NgbCollapse
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  /** BookStorage service instance */
  bookStorage = inject(BookStorage);
  /** List of books */
  booksList = signal<BookMetadata[]>([]);
  /** Search text */
  searchText = '';
  /** Filters visibility */
  isFiltersHidden = true;
  /** Authors models list */
  authorModels: { author: string; isChecked: boolean; }[] = [];

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.booksList.set(this.bookStorage.getBooks());
    this.authorModels = this.bookStorage.getAuthors().map((author) => ({
      author,
      isChecked: true,
    }))
  }

  /**
   * Handles on search action
   */
  onSearch() {
    this.updateBooks();
  }

  /**
   * Handles on sorting action
   * @param order
   */
  onSorting(order: SortingOrder) {
    this.bookStorage.setOrdering(order);
    this.updateBooks();
  }

  /**
   * Handles on author change action
   */
  onAuthorChange() {
    this.updateBooks();
  }

  /**
   * Updates books list
   * @private
   */
  private updateBooks() {
    this.booksList.set(
      this.bookStorage.getBooks(
        this.searchText,
        this.authorModels.filter((item) => item.isChecked).map((item) => item.author),
      )
    );
  }
}
