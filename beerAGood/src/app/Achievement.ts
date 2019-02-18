export class Achievement {
  public id = 0;
  public naam: String;
  public score: number;
  public omschrijving: String;
  public datumBehaald: String;
  public plaatje: String;


  constructor(id: number, naam: String, score: number, omschrijving: String, datumBehaald: String, plaatje: String) {
    this.id = id;
    this.naam = naam;
    this.score = score;
    this.omschrijving = omschrijving;
    this.datumBehaald = datumBehaald;
    this.plaatje = plaatje;
  }
}
