import { Component, OnInit } from '@angular/core';
import {RateService} from "../rate.service";
import {Rate} from "../Rate";
import {LocalStorageService} from "../LocalStorageService";
import {AchievementServiceService} from "../achievement-service.service";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  model = new Rate(0,3,'','','', this.storage.getStoredUser(), this.storage.getStoredBier());
  submitted = false;
  invalid = false;

  constructor(private rateService: RateService, private  storage: LocalStorageService, private achievementService: AchievementServiceService) { }

  onSubmit() {
    this.submitted = true;
    this.invalid = false;
  }

  saveRate(omschrijving: string, datum: string, locatie: string) {
    this.model.omschrijving = omschrijving;
    this.model.datum = datum;
    this.model.locatie = locatie;
    this.model.user = this.storage.getStoredUser();
    this.model.bier = this.storage.getStoredBier();
    if (this.model.bier.id > 0 && this.model.user.id > 0) {
      this.rateService.saveRate(this.model).subscribe();
      this.onSubmit();
    } else {
      this.invalid = true;
      console.log(this.model.user + " : " + this.model.bier)
    }
  }

  checkAchievements(){
    // this.achievementService.checkAchievements().subscribe();
    this.achievementService.checkAlcoholVrij().subscribe();
    this.achievementService.checkVijfVerschillende().subscribe();
    this.achievementService.checkKoningsdag().subscribe();
    this.achievementService.checkYear().subscribe();
  }

  ngOnInit(): void {
  }

}
