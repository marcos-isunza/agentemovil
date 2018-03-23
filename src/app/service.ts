import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class Service{
  constructor(private _http: HttpClient) {}
  authApi = 'http://localhost:8080/RESTfulExample/rest/auth/post';

  authUser(user) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(user);
    return this._http
      .post(
        this.authApi,
        body,
        httpOptions
      )
      .map(userData => {
        return userData;
      })
      .catch(this.handleError);
  }

    private handleError(err: HttpErrorResponse) {
    console.log(err);
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
