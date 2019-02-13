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
  loggedInUserId = 0;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }


  validateUser(username: String, password: String) {
    this.userService.findUser(username, password).subscribe(
      result => {
        console.log(username + " " + result)
        if (result > 0) {
          this.loggedInCorrect = true;
          this.loggedInUserId = result;
        } else {
          this.loggedInIncorrect = true;
        }
      }
    )
  }

  resetFlags() {
    this.loggedInIncorrect = false;
    this.loggedInCorrect = false;
  }
}
