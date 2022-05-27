import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {Reservation} from "../../reservations/model/reservation"

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SendReservationService {
  basePath ='http://localhost:3000/customers';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

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

  create(item:any): Observable<Reservation>{
    return this.http.post<Reservation>(this.basePath, JSON.stringify(item), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }
}
