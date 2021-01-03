import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username,password): Observable<String>{
    let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64

    let header = new HttpHeaders({
      Authentication: basicAuthHeaderString
    })

    return this.httpStudent.get<String>("http://localhost:8080/basicauth",{headers : header}).pipe(
      map(
        response => {
          sessionStorage.setItem("isRegister",username);
          return response;
        }
      )
    );
  }
}
