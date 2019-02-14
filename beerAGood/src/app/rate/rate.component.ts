import { Component, OnInit } from '@angular/core';
import {RateService} from "../rate.service";
import {Rate} from "../Rate";
import {LocalStorageService} from "../LocalStorageService";
import {User} from "../User";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  private cijfer = 3;
  model = new Rate(0,3,'','','', this.storage.getStoredUser(), this.storage.getStoredBier());
  submitted = false;

  constructor(private rateService: RateService, private  storage: LocalStorageService) { }

  onSubmit() {
    this.submitted = true;
  }

  saveRate() {
    this.model.user = this.storage.getStoredUser();
    this.model.bier = this.storage.getStoredBier();
    if (this.model.bier.id > 0 && this.model.user.id > 0) {
      this.rateService.saveRate(this.model).subscribe();
    } else {
      console.log(this.model.user + " : " + this.model.bier)
    }
  }

  ngOnInit(): void {
  }

}
