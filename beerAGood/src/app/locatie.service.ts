import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Locatie} from "./Locatie";

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Locatie[]>  {
    return this.http.get<any>('http://localhost:8080/locatie').pipe(
      catchError(this.handleError<Locatie>(`findAll`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
