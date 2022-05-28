import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Customer} from "../model/customer";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  //Customer Endpoint
  basePath ='http://localhost:3000/customers';
  //basePath ='https://my-json-server.typicode.com/NiltonTorres/datos/customers';

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

  //Get All Students
  getAll(): Observable<Customer> {
    return this.http.get<Customer>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //update Customer
  update(id: any, item: any): Observable<Customer> {
    return this.http.put<Customer>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Delete Customer
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Create Student
  create(item: any): Observable<Customer> {
    return this.http.post<Customer>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }






}
