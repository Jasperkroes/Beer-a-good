export class Bier {

  id: Number = 0;
  naam: String;
  afkomst: String;
  alcoholPercentage: Number;

  constructor(id: Number, naam: String, afkomst: String, alcoholPercentage: Number) {
    this.naam = naam;
    this.id = id;
    this.afkomst = afkomst;
    this.alcoholPercentage = alcoholPercentage;
  }
}
