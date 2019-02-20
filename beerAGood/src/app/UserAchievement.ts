import {User} from "./User";
import {Achievement} from "./Achievement";

export class UserAchievement {
  public user: User;
  public achievement: Achievement;
  public datumBehaald: string;

  constructor(acievement: Achievement, datum: string) {
    this.achievement = acievement;
    this.datumBehaald = datum;
  }
}
