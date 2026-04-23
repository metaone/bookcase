import { TestBed } from '@angular/core/testing';

import { GenreStorage } from './genre-storage';

describe('GenreStorage', () => {
  let service: GenreStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
