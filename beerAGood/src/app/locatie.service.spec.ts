import { TestBed } from '@angular/core/testing';

import { LocatieService } from './locatie.service';

describe('LocatieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocatieService = TestBed.get(LocatieService);
    expect(service).toBeTruthy();
  });
});
