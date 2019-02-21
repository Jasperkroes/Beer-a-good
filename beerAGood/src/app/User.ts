import {UserAchievement} from "./UserAchievement";
import {forEach} from "@angular/router/src/utils/collection";

export class User{

  public id: Number = 0;
  public naam: String;
  public leeftijd: Number;
  public username: String;
  public password: String;
  public score: number;
  public userAchievements: UserAchievement[];

  constructor(id: Number, naam: String, leeftijd: Number, username: String, password: String, score: number, ...uas: UserAchievement[]) {
    this.id = id;
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.username = username;
    this.password = password;
    this.score = score;
    uas.forEach((ua: UserAchievement) => {
      ua.user = this;
    });
    this.userAchievements = uas;
  }


}
