import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";
import {User} from "../User";
import {UserServiceService} from "../user-service.service";
import {Bier} from "../Bier";
import {BierServiceService} from "../bier-service.service";

@Component({
  selector: 'app-bier-form',
  templateUrl: './bier-form.component.html',
  styleUrls: ['./bier-form.component.css']
})
export class BierFormComponent implements OnInit {

  bier = new Bier(0,'','',0,'');
  isnewUser = true;
  submitted = false;

  constructor(private bierService: BierServiceService) {
  }

  onSubmit() {
    this.submitted = true;
  }

  newBier() {
    this.bier = new Bier(0, '', '', 0, '');
  }

  saveBier() {
    this.bierService.saveBier(this.bier).subscribe();
  }

  verifyNewBier(naam: string) {
    this.bierService.findBierByNaam(naam).subscribe(
      result => {
        if(result.id <= 0) {
          this.isnewUser = true;
          this.onSubmit();
        } else {
          this.isnewUser = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.isnewUser = true;
  }
}
