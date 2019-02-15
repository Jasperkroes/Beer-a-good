import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {Rate} from "./Rate";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./LocalStorageService";

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveRate(model: Rate){
    return this.http.post('http://localhost:8080/rate', model).pipe(
      catchError(this.handleError<Rate>(`saverate`))
    );
  }

  getAllRatingsFromUser(id: Number): Observable<Rate[]> {
    return this.http.get<any>('http://localhost:8080/historyQry?user=' + id).pipe(
      catchError(this.handleError<Rate>(`query user id ratings`))
    );
  }
}
