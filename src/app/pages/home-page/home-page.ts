import { Component, inject, OnInit } from '@angular/core';
import { BookCard, BookMetadata, BookStorage } from '../../shared';
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
  bookStorage = inject(BookStorage);
  booksList: BookMetadata[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.booksList = this.bookStorage.getBooks();
  }

  onSearch(): void {
    this.booksList = this.bookStorage.getBooks(this.searchText);
  }
}
