import { TestBed } from '@angular/core/testing';

import { WorkStorage } from './work-storage';

describe('WorkStorage', () => {
  let service: WorkStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
