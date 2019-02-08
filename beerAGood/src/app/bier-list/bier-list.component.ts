import { Component, OnInit } from '@angular/core';
import {Bier} from "../Bier";
import {BierServiceService} from "../bier-service.service";

@Component({
  selector: 'app-bier-list',
  templateUrl: './bier-list.component.html',
  styleUrls: ['./bier-list.component.css']
})
export class BierListComponent implements OnInit {

  biertjes: Bier[];

  constructor(private bierService: BierServiceService) { }

  ngOnInit() {
    this.getAllBiertjes();
  }

  getAllBiertjes() {
    this.bierService.findAll().subscribe(
      biertjes => {
        this.biertjes = biertjes;
      },
      err => {
        console.log(err);
      }
    );
  }

}
