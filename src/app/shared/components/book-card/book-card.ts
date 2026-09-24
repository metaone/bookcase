import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Book } from '../../interfaces';

/**
 * Book card component
 */
@Component({
  selector: 'app-book-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './book-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './book-card.scss',
})
export class BookCard {
  /** Book */
  book = input.required<Book>()
}
