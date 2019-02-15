import { Component, OnInit } from '@angular/core';
import {Rate} from "../Rate";
import {RateService} from "../rate.service";
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-geschiedenis',
  templateUrl: './geschiedenis.component.html',
  styleUrls: ['./geschiedenis.component.css']
})
export class GeschiedenisComponent implements OnInit {

  ratings: Rate[];

  constructor(private ratingService: RateService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.getAllRatings();
  }

  private getAllRatings() {
    this.ratingService.getAllRatingsFromUser(this.storage.getStoredUser().id).subscribe(
      result => {
        this.ratings = result;
      }
    );
  }
}
