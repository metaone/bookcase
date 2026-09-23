import { TestBed } from '@angular/core/testing';
import { QueryParamsStore } from './query-params-store';

describe('QueryParamsStore', () => {
  let service: QueryParamsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryParamsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
