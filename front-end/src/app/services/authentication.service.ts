import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username: String,password: String): Observable<String>{
    //let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64

    /*let header = new Headers({
      Authentication: basicAuthHeaderString
    })
    */
    return this.httpStudent.get<String>("http://localhost:8080/basicauth");
  }
}
