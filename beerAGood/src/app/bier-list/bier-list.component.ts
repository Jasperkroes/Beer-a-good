import { Component, OnInit } from '@angular/core';
import {Bier} from "../Bier";
import {BierServiceService} from "../bier-service.service";
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-bier-list',
  templateUrl: './bier-list.component.html',
  styleUrls: ['./bier-list.component.css']
})
export class BierListComponent implements OnInit {

  selectedBier: Bier;
  biertjes: Bier[];

  constructor(private bierService: BierServiceService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.getAllBiertjes();
    this.selectedBier = new Bier(-1,'','',1,'');
    this.storage.storeBier(this.selectedBier);
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

  store(bier: Bier) {
    if (bier.id > 0) {
      this.storage.storeBier(bier);
      return true;
    }
    return false;
  }
}
