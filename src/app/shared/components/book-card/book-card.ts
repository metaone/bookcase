import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookModel } from '../../models';
import { NgOptimizedImage } from '@angular/common';

/**
 * Book card component
 */
@Component({
  selector: 'app-book-card',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './book-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './book-card.scss',
})
export class BookCard {
  /** Book */
  book = input.required<BookModel>()
}
