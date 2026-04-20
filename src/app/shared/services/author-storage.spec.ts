import { TestBed } from '@angular/core/testing';

import { AuthorStorage } from './author-storage';

describe('AuthorStorage', () => {
  let service: AuthorStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
