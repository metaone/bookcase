import { Component, input } from '@angular/core';
import { BookMetadata } from '../../interfaces';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  book = input<BookMetadata>()
}
