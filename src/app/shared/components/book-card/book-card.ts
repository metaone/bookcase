import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookModel } from '../../models';

/**
 * Book card component
 */
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
  book = input.required<BookModel>()
}
