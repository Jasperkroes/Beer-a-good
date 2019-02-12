import { Component, OnInit } from '@angular/core';
import {User} from "../User";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User(0, '', null, '', '');
  password2: String;

  submitted = false;

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
}
