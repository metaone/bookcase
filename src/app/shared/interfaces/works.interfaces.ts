import { AuthorsCollection } from '../collections';
import { SortingOrder } from '../types';

/** Work model author field interface */
export interface WorkAuthorField {
  id: AuthorsCollection;
  name: string;
}

/** Work fetch options */
export interface WorkFetchOptions {
  searchQuery?: string;
  sortingOrder?: SortingOrder;
  authorsIds?: AuthorsCollection[];
}
