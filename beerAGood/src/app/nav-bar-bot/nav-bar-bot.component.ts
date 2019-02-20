import { Component, OnInit } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'primary',
    message: 'Achievement Unlocked',
  }
]

@Component({
  selector: 'app-nav-bar-bot',
  templateUrl: './nav-bar-bot.component.html',
  styleUrls: ['./nav-bar-bot.component.css']
})
export class NavBarBotComponent implements OnInit {
  // Todo: Deze wordt true als er een achievement is gehaald in de achievement check.
  show = false;

  constructor() { }
  alerts: Alert[];
  ngOnInit() {
  }


  reset() {
    this.alerts = Array.from(ALERTS);

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
