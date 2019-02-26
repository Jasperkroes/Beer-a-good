import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";
import {Achievement} from "./Achievement";
import {LocalStorageService} from "./LocalStorageService";
import {User} from "./User";
import {UserServiceService} from "./user-service.service";
import {UserAchievement} from "./UserAchievement";


@Injectable({
  providedIn: 'root'
})
export class AchievementServiceService {

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  findAll(): Observable<Achievement[]>  {
    return this.http.get<any>('http://localhost:8080/achievement').pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  checkAchievements(achievements: Array<Achievement>) {
    achievements.forEach(a => {
      if (a.naam === 'De Nullpointer') {
        this.checkAlcoholVrij().subscribe(
          (result: Achievement) => {
            this.putAchievement(result)
          }
        );
      }
      if (a.naam === 'De Genie') {
        this.checkGenie().subscribe(
          (result: Achievement) => {
            this.putAchievement(result);
          }
        )
      }
      if (a.naam === 'De Koning') {
        this.checkKoningsdag().subscribe(
          (result: Achievement) => {
            this.putAchievement(result);
          }
        );
      }
      if (a.naam === '5') {
        this.checkVijfVerschillende().subscribe(
          (result: Achievement) => {
            this.putAchievement(result);
          }
        );
      }
      if (a.naam === 'Happy new beer') {
        this.checkYear().subscribe(
          (result: Achievement) => {
            this.putAchievement(result);
          }
        );
      }
    });
  }

  putAchievement(result: Achievement) {
    if(result.id>0) {
      this.checkGehaald(result.id).subscribe( ua => {
        if (ua.datumBehaald === '-') {
          this.http.put<any>('http://localhost:8080/user/'+this.storage.getStoredUser().id+'/achievement/'+result.id,
            Date()).pipe().subscribe();
        }
      });
    }
  }

  checkAlcoholVrij(): Observable<Achievement> {
    return this.http.get<any>('http://localhost:8080/achievementAlcoholVrij/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
    );
  }

  checkVijfVerschillende() {
    return this.http.get<any>('http://localhost:8080/achievementVijfVerschillende/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
    );
  }

  checkKoningsdag() {
    return this.http.get<any>('http://localhost:8080/achievementKoningsdag/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
    );
  }

  checkYear() {
    return this.http.get<any>('http://localhost:8080/achievementYear/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
    );
  }

  checkGenie() {
    return this.http.get<any>('http://localhost:8080/achievementGenie/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
    );
  }

  checkGehaald(id: number): Observable<UserAchievement> {
    return this.http.get<any>('http://localhost:8080/checkGehaald/'+id+'/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<UserAchievement>(`checkgehaald`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  isNewAchievement(): Observable<boolean> {
    return this.http.get<any>('http://localhost:8080/findNewAchievement/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<boolean>(`isnewachievement`))
    );
  }

  setAllGezien(): Observable<UserAchievement[]> {
    return this.http.put<any>('http://localhost:8080/allAchievementsGezien/'+this.storage.getStoredUser().id,null).pipe(
      catchError(this.handleError<UserAchievement[]>(`setAllAchievementsGezien`))
    );
  }
}
