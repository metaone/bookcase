import { SortingOrder } from '../types';

/** Authors fetch options */
export interface AuthorFetchOptions {
  searchQuery?: string;
  sortingOrder?: SortingOrder;
}
