import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../User";
import {LocalStorageService} from "../LocalStorageService";
import sha1 from "sha1";
import {AchievementServiceService} from "../achievement-service.service";
import {Achievement} from "../Achievement";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User;
  loggedInCorrect = false;
  loggedInIncorrect = false;

  constructor(private userService: UserServiceService, private storage: LocalStorageService, private achievementServiceService: AchievementServiceService) { }

  ngOnInit() {
  }


  validateUser(username: string, password: string) {
    this.userService.findUser(username, sha1(password)).subscribe(
      result => {
        if (result.id > 0) {
          this.loggedInCorrect = true;
          this.storage.storeUser(result);
        } else {
          this.loggedInIncorrect = true;
        }
      }
    )
  }

  resetFlags() {
    this.loggedInIncorrect = false;
    this.loggedInCorrect = false;
  }

  getCompletedAchievements() {
    var behaaldeAchievementIds = new Array<Achievement>();
    this.achievementServiceService.findAll().subscribe(result => {
      result.forEach(achievement => {
        this.achievementServiceService.checkGehaald(achievement.id).subscribe(ua => {
          behaaldeAchievementIds.push(ua.achievement);
        })
      });
    });
    this.storage.setBehaaldeAchievements(behaaldeAchievementIds);
  }
}
