import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BookCard, BookMetadata, BookStorage, SortingOrder } from '../../shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [
    BookCard,
    FormsModule
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

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.booksList.set(this.bookStorage.getBooks());
  }

  /**
   * Handles on search action
   */
  onSearch() {
    this.booksList.set(this.bookStorage.getBooks(this.searchText));
  }

  onSorting(order: SortingOrder) {
    this.bookStorage.setOrdering(order);
    this.booksList.set(this.bookStorage.getBooks(this.searchText));
  }
}
