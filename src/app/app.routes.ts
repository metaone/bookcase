import { Routes } from '@angular/router';
import { AuthorPage, AuthorsPage, BookPage, BooksPage, SeriesPage, WorksPage } from './pages';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksPage,
  },
  {
    path: 'books/:bookId',
    component: BookPage,
  },
  {
    path: 'authors',
    component: AuthorsPage,
  },
  {
    path: 'authors/:authorId',
    component: AuthorPage,
  },
  {
    path: 'works',
    component: WorksPage,
  },
  {
    path: 'series',
    component: SeriesPage,
  },
  {
    path: '**',
    redirectTo: 'books'
  }
];
