import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";
import {Achievement} from "../Achievement";
import {AchievementServiceService} from "../achievement-service.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: Array<Achievement> = new Array<Achievement>();
  headElements = ['Naam', 'Score', 'Omschrijving', 'Behaald op'];

  constructor(private storage: LocalStorageService, private achievementService: AchievementServiceService) { }

  ngOnInit() {
    this.findAll();
  }

  private findAll() {
    this.achievementService.findAll().subscribe(
      result => {
        this.achievements = result;
        this.achievementService.checkAchievements(result);
      }
    )
  }
}
