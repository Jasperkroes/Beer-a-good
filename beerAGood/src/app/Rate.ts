import {User} from "./User";
import {Bier} from "./Bier";

export class Rate {

  public id: Number = 0;
  public cijfer: Number;
  public omschrijving: String;
  public datum: String;
  public locatie: String;
  public user: User;
  public bier: Bier;

  constructor(id: Number, cijfer: Number, omschrijving: String, datum: String, locatie: String, user: User, bier: Bier) {
    this.id = id;
    this.cijfer = cijfer;
    this.omschrijving = omschrijving;
    this.datum = datum;
    this.locatie = locatie;
    this.user = user;
    this.bier = bier;
  }
}
