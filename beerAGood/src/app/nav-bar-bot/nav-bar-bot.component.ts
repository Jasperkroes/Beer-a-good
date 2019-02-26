import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AchievementServiceService} from "../achievement-service.service";

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
  // Todo: Deze wordt true als er een achievement is gehaald in de achievementCheck() en er geen andere achievements zijn.
  show = false;
  // Todo indien achieved 0 is is het niet mogelijk te klikken op de alertButton. Achieved is +1 als achievementCheck() true is.
  //+2 als er meerdere achievements gehaald zijn.
  achieved = 0;

  constructor(private achievementService: AchievementServiceService) { }
  alerts: Alert[];
  ngOnInit() {
    this.achievementService.isNewAchievement().subscribe( result => {
      if (result) {
        this.achieved = 1;
      }
    });
  }

  reset() {
    this.alerts = Array.from(ALERTS);

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    //Todo: weg klikken van de achievement verlaagt dus achieved met 1.
    this.achieved = 0;
  }

  // Voor de audio functie bij het klikken op de alertButton
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
    onAudioPlay(){
      this.audioPlayerRef.nativeElement.play();
    }
}
