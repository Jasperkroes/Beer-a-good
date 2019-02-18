import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";
import {Achievement} from "./Achievement";

@Injectable({
  providedIn: 'root'
})
export class AchievementServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Achievement[]>  {
    return this.http.get<any>('http://localhost:8080/achievement').pipe(
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
