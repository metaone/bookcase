import { Component, inject } from '@angular/core';
import { BookCard, BookStorage } from '../../shared';

@Component({
  selector: 'app-home-page',
  imports: [
    BookCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public bookStorage = inject(BookStorage);
}
