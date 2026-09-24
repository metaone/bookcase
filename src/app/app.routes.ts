import { Routes } from '@angular/router';
import { BooksPage } from './pages';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksPage,
  },
  {
    path: '**',
    redirectTo: 'books'
  }
];
