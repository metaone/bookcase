import { TestBed } from '@angular/core/testing';

import { SeriesStorage } from './series-storage';

describe('SeriesStorage', () => {
  let service: SeriesStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
