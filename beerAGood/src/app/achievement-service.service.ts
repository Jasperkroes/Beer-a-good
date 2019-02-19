import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";
import {Achievement} from "./Achievement";
import {LocalStorageService} from "./LocalStorageService";

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

  checkAchievements() {
    return this.checkAlcoholVrij();
  }

  checkAlcoholVrij() {
    return this.http.get<any>('http://localhost:8080/achievementAlcoholVrij/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  checkVijfVerschillende() {
    return this.http.get<any>('http://localhost:8080/achievementVijfVerschillende/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  checkKoningsdag() {
    return this.http.get<any>('http://localhost:8080/achievementKoningsdag/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  checkYear() {
    return this.http.get<any>('http://localhost:8080/achievementYear/'+this.storage.getStoredUser().id).pipe(
      catchError(this.handleError<Bier>(`findAll`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
