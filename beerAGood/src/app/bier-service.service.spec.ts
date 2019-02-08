import { TestBed } from '@angular/core/testing';

import { BierServiceService } from './bier-service.service';

describe('BierServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BierServiceService = TestBed.get(BierServiceService);
    expect(service).toBeTruthy();
  });
});
