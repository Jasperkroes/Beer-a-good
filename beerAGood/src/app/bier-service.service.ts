import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BierServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Bier[]>  {
    return this.http.get<any>('http://localhost:8080/bier').pipe(
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
