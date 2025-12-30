import * as data from '../../data/books.json';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { Book, BookCard } from '../../shared';

@Component({
  selector: 'app-home',
  imports: [
    MatPaginator,
    MatGridList,
    MatGridTile,
    BookCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  booksList: Book[] = [
    {
      id: 1,
      coverImage: '',
      title: 'Сосни',
    },
    {
      id: 2,
      coverImage: '',
      title: 'Облуда'
    },
    {
      id: 3,
      coverImage: '',
      title: 'Останнє місто'
    },
    {
      id: 4,
      coverImage: '',
      title: 'Апґрейд'
    },
    {
      id: 5,
      coverImage: '',
      title: 'Рекурсія'
    },
    {
      id: 6,
      coverImage: '',
      title: 'Темна матерія'
    },
  ];

  ngOnInit() {
    data.books.forEach((item) => {
      console.log('json', item);
    });
  }
}
