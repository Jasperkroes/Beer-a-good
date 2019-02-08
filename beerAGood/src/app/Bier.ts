export class Bier {

  id: Number = 0;
  naam: String;
  afkomst: String;
  alcoholPercentage: Number;
  foto: String;

  constructor(id: Number, naam: String, afkomst: String, alcoholPercentage: Number, foto: String) {
    this.naam = naam;
    this.id = id;
    this.afkomst = afkomst;
    this.alcoholPercentage = alcoholPercentage;
    this.foto = foto;
  }
}
