import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL, AUTHENTICATION, TOKEN} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username: string,password: string){
    let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //var head = new Headers({'Content-Type': 'application/json'});
    //const head = new HttpHeaders().set('Content-Type','application/json');
    //var user: AuthenticationBean = new AuthenticationBean(username,password);
    return this.httpStudent.post<any>("http://localhost:8080/login",{username,password}).pipe(
      map(
        response => {
          alert("done")
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          //sessionStorage.setItem(`${TOKEN}`,"Bearer " + response.headers.get('Authorization'));
          sessionStorage.setItem(`${TOKEN}`,basicAuthHeaderString);
          return response;
        }
      )
    );
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

export class login{
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
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
