import { AuthorsCollection } from '../collections';

/** Author model */
export class AuthorModel {
  /** ID */
  readonly id: AuthorsCollection;
  /** Name */
  readonly name: string;

  /**
   * Creates author model
   * @param authorId - Author ID
   */
  constructor(authorId: AuthorsCollection) {
    this.id = authorId;
    this.name = AuthorsCollection[authorId];
  }
}
