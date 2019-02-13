export class Bier {

  public id: Number = 0;
  public naam: String;
  public afkomst: String;
  public alcoholPercentage: Number;
  public foto: String;

  constructor(id: Number, naam: String, afkomst: String, alcoholPercentage: Number, foto: String) {
    this.naam = naam;
    this.id = id;
    this.afkomst = afkomst;
    this.alcoholPercentage = alcoholPercentage;
    this.foto = foto;
  }
}
