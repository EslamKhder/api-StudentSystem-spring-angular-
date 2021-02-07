import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL, AUTHENTICATION, TOKEN} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username,password){

    return this.httpStudent.post<any>(`${API_URL}/signin`,{username,password}).pipe(
      map(
        response => {
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          sessionStorage.setItem(`${TOKEN}`,`Bearer ${response.token}`);
          return response;
        }
      )
    );
    /*let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpStudent.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers : header}).pipe(
      map(
        response => {
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          sessionStorage.setItem(`${TOKEN}`,basicAuthHeaderString);
          return response;
        }
      )
    );*/
  }
  getAuthentication(){
    return sessionStorage.getItem(`${AUTHENTICATION}`);
  }
  getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem(`${TOKEN}`);
    }
  }
  isLogin(){
    return !(sessionStorage.getItem(`${AUTHENTICATION}`) == null);
  }

  logOut(){
    sessionStorage.removeItem(`${AUTHENTICATION}`);
    sessionStorage.removeItem(`${TOKEN}`);
  }
}
/*
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
*/
