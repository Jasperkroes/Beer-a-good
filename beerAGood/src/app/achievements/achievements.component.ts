import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
  }

}
