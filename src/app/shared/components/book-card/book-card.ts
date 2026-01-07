import { Component, input } from '@angular/core';
import { BookMetadata } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [
    RouterLink
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  /** Book */
  book = input.required<BookMetadata>()
}
