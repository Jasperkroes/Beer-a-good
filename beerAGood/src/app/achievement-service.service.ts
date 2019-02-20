import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";
import {Achievement} from "./Achievement";
import {LocalStorageService} from "./LocalStorageService";
import {User} from "./User";
import {UserAchievement} from "./UserAchievement";
import {getLocaleDateFormat} from "@angular/common";

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

  checkAchievements(achievements: Achievement[]) {
    const us: User = this.storage.getStoredUser();
    this.checkAlcoholVrij().subscribe(
      result => {
        console.log(result);
        // if(result) {
        //   //TODO: get correct achievement and datum
        //   us.userAchievements.push(new UserAchievement(achievements[0], '20-2-2019'));
        //   this.http.post<any>('http://localhost:8080/user', us).pipe(
        //     catchError(this.handleError<User>('postAchievementForUser'))
        //   ).subscribe( res => {console.log(res.username)});
        //   console.log('Alcoholvrij is gehaald!');
        // }
      }
    );
  }

  checkAlcoholVrij(): Observable<boolean> {
    return this.http.get<any>('http://localhost:8080/achievementAlcoholVrij/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<boolean>(`findAll`))
    );
  }

  checkVijfVerschillende() {
    return this.http.get<any>('http://localhost:8080/achievementVijfVerschillende/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<boolean>(`findAll`))
    );
  }

  checkKoningsdag() {
    return this.http.get<any>('http://localhost:8080/achievementKoningsdag/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<boolean>(`findAll`))
    );
  }

  checkYear() {
    return this.http.get<any>('http://localhost:8080/achievementYear/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<boolean>(`findAll`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
