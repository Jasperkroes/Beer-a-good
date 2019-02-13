import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
  }

}
