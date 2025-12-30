import { Injectable } from '@angular/core';
import { BOOKS } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BookStorage {
  books = [...BOOKS];
}
