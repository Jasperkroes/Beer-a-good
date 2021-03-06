import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserServiceService} from "../user-service.service";

import sha1 from "sha1";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  model = new User(0, '', null, '', '', 0);
  wachtwoord: string = '';
  isnewUser = true;
  submitted = false;

  constructor(private userService: UserServiceService) {
  }

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(0,'',0,'','', 0);
  }

  saveUser() {
    this.userService.saveUser(this.model).subscribe();
  }


  alterUser() {
    if (this.model.naam.length > 50) {
      this.model.naam = this.model.naam.substring(0, 50);
    }
    if (this.model.username.length > 50) {
      this.model.username = this.model.username.substring(0, 50);
    }
    if (this.model.password.length > 50) {
      this.model.password = this.model.password.substring(0, 50);
    }
    this.model.password = sha1(this.wachtwoord);
  }

  verifyNewUser(username: string) {
    this.alterUser();
    this.userService.findUserByUserName(username).subscribe(
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
