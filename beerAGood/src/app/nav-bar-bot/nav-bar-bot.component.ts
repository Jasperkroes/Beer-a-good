import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LocalStorageService} from "../LocalStorageService";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'primary',
    message: 'Achievement Unlocked',
  }
];

@Component({
  selector: 'app-nav-bar-bot',
  templateUrl: './nav-bar-bot.component.html',
  styleUrls: ['./nav-bar-bot.component.css']
})
export class NavBarBotComponent implements OnInit {
  achieved = 0;

  constructor(private storage: LocalStorageService) { }
  alerts: Alert[];
  ngOnInit() {
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    this.storage.setItem('newAchievement', '0');
  }

  // Voor de audio functie bij het klikken op de alertButton
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
    onAudioPlay(){
      this.audioPlayerRef.nativeElement.play();
    }
}
