import { TestBed } from '@angular/core/testing';

import { JwtstorageService } from './jwtstorage.service';

describe('JwtstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtstorageService = TestBed.get(JwtstorageService);
    expect(service).toBeTruthy();
  });
});
