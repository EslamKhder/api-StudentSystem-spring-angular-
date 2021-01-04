import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username,password){
    let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpStudent.get<AuthenticationBean>("http://localhost:8080/basicauth",{headers : header}).pipe(
      map(
        response => {
          sessionStorage.setItem("isRegister",username);
          return response;
        }
      )
    );
  }
}
export class AuthenticationBean{

  constructor(private _message: string) {
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
