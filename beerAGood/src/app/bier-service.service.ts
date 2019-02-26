import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Bier} from "./Bier";
import {catchError} from "rxjs/operators";
import {User} from "./User";

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

  saveBier(model: Bier){
    return this.http.post('http://localhost:8080/user', model).pipe(
      catchError(this.handleError<Bier>(`saveuser`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  findBierByNaam(naam: string): Observable<Bier> {
    return this.http.post<any>('http://localhost:8080/verifyBier', new Bier(0, naam, '', 0, '')).pipe(
      catchError(this.handleError<Bier>(`verify`))
    );
  }
}
