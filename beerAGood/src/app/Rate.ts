export class Rate {

  public id: Number = 0;
  public cijfer: Number;
  public omschrijving: String;
  public datum: String;
  public locatie: String;
  public userID: Number;
  public bierID: Number;

  constructor(id: Number, cijfer: Number, omschrijving: String, datum: String, locatie: String, userID: Number, bierID: number) {
    this.id = id;
    this.cijfer = cijfer;
    this.omschrijving = omschrijving;
    this.datum = datum;
    this.locatie = locatie;
    this.userID = userID;
    this.bierID = bierID;
  }
}
