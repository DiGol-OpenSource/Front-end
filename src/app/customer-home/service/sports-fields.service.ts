import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Customer} from "../../customer/model/customer";
import {SportField} from "../model/sport-field";

@Injectable({
  providedIn: 'root'
})
export class SportsFieldsService {
  basePath='http://localhost:3000/customer-home';
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }
  //API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      console.error(
          `Backend return code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError( () => new Error(`Something happened with request, please try again later`));
  }
  getAll(): Observable<SportField> {
    return this.http.get<SportField>(this.basePath, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
  }
  create(item: any): Observable<SportField> {
    return this.http.post<SportField>(this.basePath, JSON.stringify(item), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }

}
