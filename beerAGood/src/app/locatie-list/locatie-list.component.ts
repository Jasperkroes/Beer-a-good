import { Component, OnInit } from '@angular/core';
import {Locatie} from "../Locatie";
import {LocatieService} from "../locatie.service";

@Component({
  selector: 'app-locatie-list',
  templateUrl: './locatie-list.component.html',
  styleUrls: ['./locatie-list.component.css']
})
export class LocatieListComponent implements OnInit {

  selectedLocatie: Locatie;
  locaties: Locatie[];

  constructor(private locatieService: LocatieService) { }

  ngOnInit() {
    this.getAllLocaties();
  }

  getAllLocaties() {
    this.locatieService.findAll().subscribe(
      locaties => {
        this.locaties = locaties.sort((a,b) => {
          if (a.naam > b.naam) {
            return 1;
          }
          return -1;
        })
      },
      err => {
        console.log(err);
      }
    );
  }

}
