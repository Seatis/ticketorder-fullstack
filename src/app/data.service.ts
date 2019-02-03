import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {PostResponse} from './model/postres.model';
import {catchError} from 'rxjs/operators';
import { throwError as _throw ,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  public getOrders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get(this.serverUrl + 'getorders.php', httpOptions);
  }

  public postOrder(body: string): Observable<PostResponse> {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<PostResponse>(this.serverUrl + 'addorder.php', body, httpOptions).pipe( catchError(this.handleError));
  }

  public deleteOrder(id: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: {
        id: id
      }
    };
    return this.http.delete<string>(this.serverUrl + 'deleteorder.php', httpOptions).pipe( catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  }


}
