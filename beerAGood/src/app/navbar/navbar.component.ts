import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
  }

}
