import { Routes } from '@angular/router';
import { BookPage, HomePage } from './pages';

export const routes: Routes = [
  {
    path: 'books',
    component: HomePage,
  },
  {
    path: 'books/:bookId',
    component: BookPage,
  },
  {
    path: '**',
    redirectTo: 'books'
  }
];
