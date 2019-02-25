import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";
import {Achievement} from "../Achievement";
import {AchievementServiceService} from "../achievement-service.service";
import {forEach} from "@angular/router/src/utils/collection";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: Array<Achievement> = new Array<Achievement>();
  allAchievements: Array<Achievement> = new Array<Achievement>();
  // headElements = ['Naam', 'Score', 'Omschrijving', 'Behaald op'];
  headElements = ['Naam', 'Omschrijving', 'Behaald op'];
  gehaald: Map<number, String> = new Map<number, String>();
  behaaldeAchievements: Array<Achievement>;
  nietBehaaldeAchievements: Array<Achievement> = new Array<Achievement>();

  constructor(private storage: LocalStorageService, private achievementService: AchievementServiceService) {
  }

  ngOnInit() {
    this.behaaldeAchievements = this.storage.getBehaaldeAchievementIds();
    this.findAll();
  }

  private findAll() {
    this.achievementService.findAll().pipe().subscribe(
      result => {
        this.achievements = result;
        this.allAchievements = result;
        this.achievementService.checkAchievements(result);
        this.checkAllGehaald(result);
      }
    );
  }

  checkAllGehaald(achievements: Achievement[]) {
    achievements.forEach(a => {
      if(!this.behaaldeAchievements.includes(a)) {
        this.achievementService.checkGehaald(a.id).subscribe(result => {
          this.gehaald.set(a.id, result.datumBehaald);
          if (result.datumBehaald != '-' && !this.behaaldeAchievements.includes(a)) {
            this.behaaldeAchievements.push(a);
          }
        });
      }
    });
  }

  showNietBehaald() {
    this.nietBehaaldeAchievements = new Array<Achievement>();
    this.allAchievements.forEach( (ach: Achievement) => {
      if(!this.behaaldeAchievements.includes(ach)) {
        this.nietBehaaldeAchievements.push(ach);
      }
    });
    this.achievements = this.nietBehaaldeAchievements;
  }
}
