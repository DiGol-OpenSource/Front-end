import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Reservation} from "../model/reservation";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  //Customer Endpoint

  //basePath ='http://localhost:3000/reservations';
  basePath ='https://my-json-server.typicode.com/NiltonTorres/datos/reservations';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {  }

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


  getAll(): Observable<Reservation> {
    return this.http.get<Reservation>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  update(id: any, item: any): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


  create(item: any): Observable<Reservation> {
    return this.http.post<Reservation>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
