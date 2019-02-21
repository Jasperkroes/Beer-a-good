import { TestBed } from '@angular/core/testing';
import {AchievementServiceService} from "./achievement-service.service";



describe('AchievementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchievementServiceService = TestBed.get(AchievementServiceService);
    expect(service).toBeTruthy();
  });
});
