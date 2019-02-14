import { Component, OnInit } from '@angular/core';
import {RateService} from "../rate.service";
import {Rate} from "../Rate";
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  private cijfer = 3;
  model = new Rate(0,3,'','','', this.storage.getStoredUser().id, 0);
  submitted = false;

  constructor(private rateService: RateService, private  storage: LocalStorageService) { }

  onSubmit() {
    this.submitted = true;
  }

  saveRate() {
    this.rateService.saveRate(this.model).subscribe();
  }

  ngOnInit(): void {
  }

}
