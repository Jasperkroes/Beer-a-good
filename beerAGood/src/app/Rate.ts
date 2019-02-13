export class Rate {

  public id: Number = 0;
  public cijfer: Number;
  public omschrijving: String;
  public datum: String;
  public locatie: String;

  constructor(id: Number, cijfer: Number, omschrijving: String, datum: String, locatie: String) {
    this.id = id;
    this.cijfer = cijfer;
    this.omschrijving = omschrijving;
    this.datum = datum;
    this.locatie = locatie;
  }
}
