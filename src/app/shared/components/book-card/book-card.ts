import { Component, effect, input, InputSignal, OnInit } from '@angular/core';
import { Book } from '../../interfaces';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard implements OnInit {
  book: InputSignal<Book> = input.required<Book>();

  ngOnInit(): void {
    console.log(this.book().title);
  }
}
