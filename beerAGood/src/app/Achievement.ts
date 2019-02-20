import {UserAchievement} from "./UserAchievement";

export class Achievement {
  public id = 0;
  public naam: String;
  public score: number;
  public omschrijving: String;
  public plaatje: String;
  public userAchievements: Set<UserAchievement> = new Set<UserAchievement>();


  constructor(id: number, naam: String, score: number, omschrijving: String, plaatje: String) {
    this.id = id;
    this.naam = naam;
    this.score = score;
    this.omschrijving = omschrijving;
    this.plaatje = plaatje;
  }
}
