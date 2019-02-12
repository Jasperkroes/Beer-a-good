import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  loggedInCorrect = false;
  loggedInIncorrect = false;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  getSelectedUser(username: String): boolean {
    this.userService.findUser(username).subscribe(
      user => {
        this.user = user;
        return true;
        },
      err => {
        console.log(err + ': User not found');
      }
    )
    return false;
  }

  validateUser(value: string) {
    //Todo: check if this value is a valid username in the db, also check if the password is correct
    if(value === 'jappie') {
      this.loggedInCorrect = true;
    } else {
      this.loggedInIncorrect = true;
    }
  }

  resetFlags() {
    this.loggedInIncorrect = false;
    this.loggedInCorrect = false;
  }
}
