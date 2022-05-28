import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {SportField} from "../model/sport-field";

@Injectable({
  providedIn: 'root'
})
export class SportsFieldsService {

  basePath='http://localhost:3000/sportsFields';
 //basePath='https://my-json-server.typicode.com/NiltonTorres/datos/sportsFields';
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }
  //API Error Handling
  currentReservation: Array<SportField>=[];

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


  setSelectReservation(selectReservation: Array<SportField>){
    return this.currentReservation=selectReservation;
  }

  getSelectReservation(){
    return this.currentReservation;
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
  getById(id:number): Observable<SportField> {
    const url=`${this.basePath}/${id}`;
    return this.http.get<SportField>(url).pipe(
        retry(2),
        catchError(this.handleError)
    )

  }
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }
  update(id: any, item: any): Observable<SportField> {
    return this.http.put<SportField>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError));
  }

}
