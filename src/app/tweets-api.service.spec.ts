import { TestBed } from '@angular/core/testing';

import { TweetsAPIService } from './tweets-api.service';

describe('TweetsAPIService', () => {
  let service: TweetsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
