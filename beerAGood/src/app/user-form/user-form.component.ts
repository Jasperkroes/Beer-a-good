import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User(0, '', null, '', '');
  password2: String;

  submitted = false;

  constructor(private userService: UserServiceService) {
  }


  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(0,'',0,'','');
  }

  checkPassword(pass: String): boolean {
    return pass===this.model.password;
  }

  toLogin() {
    this.submitted = false;

  }

  saveUser() {
    this.userService.saveUser(this.model).subscribe();
  }
}
