import { WorkToAuthorsRef } from '../refs';
import { AuthorsCollection, WorksCollection } from '../collections';
import { WorkAuthorField } from '../interfaces';


/**
 * Work model
 */
export class WorkModel {
  /** ID */
  readonly id: WorksCollection;
  /** Title */
  readonly title: string;
  /** List of authors */
  readonly authors: WorkAuthorField[];

  /**
   * Creates the work model
   * @param workId - Work ID
   */
  constructor(workId: WorksCollection) {
    this.id = workId;
    this.title = WorksCollection[workId];

    this.authors = WorkToAuthorsRef[workId].map((authorId) => ({
      id: authorId,
      name: AuthorsCollection[authorId],
    }));
  }

  includes(substring: string = ''): boolean {
    return this.title.toLowerCase().includes(substring.toLowerCase());
  }

  hasAuthor(ids: AuthorsCollection[] = []): boolean {
    return !!this.authors.find((author) => ids.includes(author.id));
  }
}


