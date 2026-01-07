import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStorage, NoResults } from '../../shared';

@Component({
  selector: 'app-book-page',
  imports: [
    RouterLink,
    NoResults,
  ],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage {
  /** ActivatedRoute service instance */
  private activatedRoute = inject(ActivatedRoute);
  /** BookStorage service instance */
  private bookStorage = inject(BookStorage);
  /** Book model */
  book = this.bookStorage.getById(Number(this.activatedRoute.snapshot.params['bookId']));
}
