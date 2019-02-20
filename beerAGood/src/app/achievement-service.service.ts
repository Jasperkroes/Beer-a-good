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

  constructor(private http: HttpClient, private storage: LocalStorageService, private userService: UserServiceService) { }

  findAll(): Observable<Achievement[]>  {
    return this.http.get<any>('http://localhost:8080/achievement').pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  checkAchievements(achievements: Array<Achievement>) {
    const us: User = this.storage.getStoredUser();
    this.checkAlcoholVrij().subscribe(
      result => {
        console.log(result.id);
        if(result.id>0) {
          const ua: UserAchievement = new UserAchievement(result, Date());
          console.log(ua);
          //TODO: get correct achievement and datum
          this.http.put<any>('http://localhost:8080/user/'+this.storage.getStoredUser().id+'/achievement/'+result.id,
            ua).pipe().subscribe()
//new User(us.id,us.naam,us.leeftijd,us.username,us.password,us.score,new UserAchievement(result, '-'))
          //Todo: save userAchievement

          // this.userService.saveUser(us).subscribe();
          // this.http.post<any>('http://localhost:8080/user', us).pipe(
          //   catchError(this.handleError<User>('postAchievementForUser'))
          // ).subscribe();

        }
      }
    );
  }

  checkAlcoholVrij(): Observable<Achievement> {
    return this.http.get<any>('http://localhost:8080/achievementAlcoholVrij/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Achievement>(`findAll`))
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
