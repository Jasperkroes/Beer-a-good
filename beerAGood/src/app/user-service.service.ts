import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, filter, first} from "rxjs/operators";
import {User} from "./User";
import {findAll} from "@angular/compiler-cli/src/ngcc/src/utils";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]>  {
    return this.http.get<any>('http://localhost:8080/user').pipe(
      catchError(this.handleError<User>(`findAll`))
    );
  }

  findUser(username: String): Observable<User> {
    return this.http.get<any>('http://localhost:8080/user/'+ username).pipe(
      filter(x => username === x.username),
      first(),
      catchError(this.handleError<User>(`findUser`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveUser(model: User){
    return this.http.post('http://localhost:8080/user', model).pipe(
      catchError(this.handleError<User>(`saveuser`))
    );
  }
}
