import { TestBed } from '@angular/core/testing';

import { NavbarbotService } from './navbarbot.service';

describe('NavbarbotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarbotService = TestBed.get(NavbarbotService);
    expect(service).toBeTruthy();
  });
});
