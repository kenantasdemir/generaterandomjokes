import { TestBed } from '@angular/core/testing';

import { RandomjokeService } from './randomjoke.service';

describe('RandomjokeService', () => {
  let service: RandomjokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomjokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
